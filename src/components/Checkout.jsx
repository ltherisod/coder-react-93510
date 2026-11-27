import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import { Link } from "react-router-dom";

import EmptyCart from "./EmptyCart";

import {
    addDoc,
    collection,
    serverTimestamp
} from "firebase/firestore";

import { db } from "../service/firebase";

import {
    Container,
    Card,
    Form,
    Button,
    Alert,
    Row,
    Col
} from "react-bootstrap";

const Checkout = () => {

    const { cart, total, clear } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    const [buyer, setBuyer] = useState({
        name: "",
        lastname: "",
        phone: "",
        address: "",
        city: ""
    });

    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const userData = (e) => {

        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });

    };

    const finalizarCompra = async (e) => {

        e.preventDefault();
        setError("");

        // Validar usuario autenticado

        if (!user) {
            setError("Debés iniciar sesión para realizar una compra.");
            return;
        }

        // Validar carrito

        if (!cart.length) {
            setError("El carrito está vacío.");
            return;
        }

        // Validar campos obligatorios

        const { name, lastname, phone, address, city } = buyer;

        if (
            !name.trim() ||
            !lastname.trim() ||
            !phone.trim() ||
            !address.trim() ||
            !city.trim()
        ) {
            setError("Completá todos los datos de entrega.");
            return;
        }

        // Validación básica del teléfono

        const phoneRegex = /^[0-9+\s()-]{7,20}$/;

        if (
            !phoneRegex.test(phone) ||
            phone.replace(/\D/g, "").length < 7
        ) {
            setError("Ingresá un número de teléfono válido.");
            return;
        }

        setLoading(true);

        try {

            // Crear el objeto de la orden

            const order = {

                userId: user.uid,

                userEmail: user.email,

                comprador: {
                    name: name.trim(),
                    lastname: lastname.trim(),
                    phone: phone.trim(),
                    address: address.trim(),
                    city: city.trim(),
                    email: user.email
                },

                compra: cart.map((product) => ({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity
                })),

                total: total(),

                fecha: serverTimestamp()
            };

            // Referencia a la colección

            const orderColl = collection(db, "orders");

            // Guardar la orden

            const response = await addDoc(orderColl, order);

            // Mostrar el ID generado

            setOrderId(response.id);

            // Vaciar el carrito después de guardar

            clear();

        } catch (err) {

            console.error(err);

            setError(
                "No se pudo generar la orden. Intentá nuevamente."
            );

        } finally {

            setLoading(false);

        }
    };

    // Mostrar confirmación antes de validar carrito vacío

    if (orderId) {

        return (
            <Container className="my-5" style={{ maxWidth: "640px" }}>

                <Card className="shadow border-0 text-center p-5">

                    <h1>¡Muchas gracias por tu compra!</h1>

                    <Alert variant="success">
                        Tu compra fue registrada correctamente.
                    </Alert>

                    <p>El identificador de tu orden es:</p>

                    <strong className="mb-4">
                        {orderId}
                    </strong>

                    <Button as={Link} to="/" variant="dark">
                        Volver a Home
                    </Button>

                </Card>

            </Container>
        );
    }

    if (!cart.length) {
        return <EmptyCart />;
    }

    return (
        <Container className="my-5" style={{ maxWidth: "640px" }}>

            <Card className="shadow border-0 p-4 p-md-5">

                <h2 className="fw-bold">Finalizar compra</h2>

                <p className="text-muted">
                    Completá los datos para recibir tu pedido.
                </p>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={finalizarCompra}>

                    <Form.Group className="mb-3" controlId="buyerEmail">

                        <Form.Label>Email de la cuenta</Form.Label>

                        <Form.Control
                            type="email"
                            value={user?.email || ""}
                            readOnly
                        />

                    </Form.Group>

                    <Row>

                        <Col md={6}>

                            <Form.Group className="mb-3" controlId="buyerName">

                                <Form.Label>Nombre</Form.Label>

                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={buyer.name}
                                    onChange={userData}
                                    required
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3" controlId="buyerLastname">

                                <Form.Label>Apellido</Form.Label>

                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    value={buyer.lastname}
                                    onChange={userData}
                                    required
                                />

                            </Form.Group>

                        </Col>

                    </Row>

                    <Form.Group className="mb-3" controlId="buyerPhone">

                        <Form.Label>Teléfono</Form.Label>

                        <Form.Control
                            type="tel"
                            name="phone"
                            value={buyer.phone}
                            onChange={userData}
                            required
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="buyerAddress">

                        <Form.Label>Dirección</Form.Label>

                        <Form.Control
                            type="text"
                            name="address"
                            value={buyer.address}
                            onChange={userData}
                            required
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="buyerCity">

                        <Form.Label>Ciudad</Form.Label>

                        <Form.Control
                            type="text"
                            name="city"
                            value={buyer.city}
                            onChange={userData}
                            required
                        />

                    </Form.Group>

                    <hr />

                    <h5>Resumen de compra</h5>

                    {cart.map((product) => (
                        <div
                            key={product.id}
                            className="d-flex justify-content-between mb-2"
                        >
                            <span>
                                {product.name} x {product.quantity}
                            </span>

                            <span>
                                ${product.price * product.quantity}
                            </span>
                        </div>
                    ))}

                    <h4 className="my-3">
                        Total: ${total()}
                    </h4>

                    <Button
                        variant="success"
                        type="submit"
                        className="w-100 fw-semibold"
                        disabled={loading}
                    >
                        {loading
                            ? "Procesando compra..."
                            : "Confirmar compra"
                        }
                    </Button>

                </Form>

            </Card>

        </Container>
    );
};

export default Checkout;