import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate, useLocation } from "react-router-dom";

import {
    Card,
    Form,
    Button,
    Alert,
    InputGroup,
    Spinner
} from "react-bootstrap";

import { FiLogIn, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

import LoaderComponent from "./LoaderComponent";
import { getAuthError } from "../service/authErrors";
import "../assets/styles/Auth.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const { login, user, loading } = useContext(AuthContext);

    const location = useLocation();

    const from = location.state?.from === "/checkout"
        ? "/checkout"
        : "/";

    const handleSubmit = async (e) => {

        e.preventDefault();
        setError("");

        if (!email.trim() || !password) {
            setError("Completá todos los campos.");
            return;
        }

        setSubmitting(true);

        try {

            // sin el await, el catch nunca se entera si firebase rechaza el login
            await login(email.trim(), password);

        } catch (err) {

            setError(getAuthError(err.code));

        } finally {

            setSubmitting(false);

        }
    };

    if (loading) {
        return <LoaderComponent text="Verificando sesión..." />;
    }

    if (user) {
        return <Navigate to={from} replace />;
    }

    return (
        <section className="auth-page">

            <Card className="auth-card p-4 p-md-5">

                <div className="text-center mb-4">

                    <div className="auth-icon">
                        <FiLogIn />
                    </div>

                    <h2 className="fw-bold mb-1">Iniciar sesión</h2>

                    <p className="text-body-secondary mb-0">
                        Ingresá a tu cuenta para continuar.
                    </p>

                </div>

                {from === "/checkout" && (
                    <Alert variant="info" className="py-2">
                        Iniciá sesión para finalizar tu compra.
                    </Alert>
                )}

                {error && <Alert variant="danger" className="py-2">{error}</Alert>}

                <Form onSubmit={handleSubmit} noValidate>

                    <Form.Group className="mb-3" controlId="loginEmail">

                        <Form.Label>Correo electrónico</Form.Label>

                        <InputGroup>
                            <InputGroup.Text><FiMail /></InputGroup.Text>
                            <Form.Control
                                type="email"
                                placeholder="tu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                            />
                        </InputGroup>

                    </Form.Group>

                    <Form.Group className="mb-4" controlId="loginPassword">

                        <Form.Label>Contraseña</Form.Label>

                        <InputGroup>
                            <InputGroup.Text><FiLock /></InputGroup.Text>
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                            />
                            <Button
                                variant="light"
                                className="auth-toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </Button>
                        </InputGroup>

                    </Form.Group>

                    <Button
                        type="submit"
                        variant="dark"
                        className="w-100 auth-submit"
                        disabled={submitting}
                    >
                        {submitting && <Spinner animation="border" size="sm" className="me-2" />}
                        {submitting ? "Ingresando..." : "Ingresar"}
                    </Button>

                </Form>

                <p className="auth-footer text-center text-body-secondary mt-4 mb-0">
                    ¿No tenés una cuenta?{" "}
                    <Link to="/register" state={{ from }}>
                        Registrate
                    </Link>
                </p>

            </Card>

        </section>
    );
};

export default Login;
