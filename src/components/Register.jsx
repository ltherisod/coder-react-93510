import { Link, Navigate, useLocation } from "react-router-dom";

import {
    Card,
    Form,
    Button,
    Alert,
    InputGroup,
    Spinner
} from "react-bootstrap";

import { FiUserPlus, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

import LoaderComponent from "./LoaderComponent";
import { getAuthError } from "../service/authErrors";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../assets/styles/Auth.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { register, loading, user } = useContext(AuthContext)

    const location = useLocation()
    const from = location.state?.from === '/checkout' ? '/checkout' : '/'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email.trim() || !password || !confirmPassword) {
            setError("Completá todos los campos.");
            return;
        }

        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        setIsSubmitting(true);
        try {
            await register(email.trim(), password)
        } catch (error) {
            setError(getAuthError(error.code))
        } finally {
            setIsSubmitting(false)
        }
    }

    if (loading) {
        return <LoaderComponent text='Verificando sesión...' />
    }

    if (user) {
        return <Navigate to={from} replace />
    }

    return (
        <section className="auth-page">

            <Card className="auth-card p-4 p-md-5">

                <div className="text-center mb-4">

                    <div className="auth-icon">
                        <FiUserPlus />
                    </div>

                    <h2 className="fw-bold mb-1">Crear cuenta</h2>

                    <p className="text-body-secondary mb-0">
                        Registrate para realizar tus compras.
                    </p>

                </div>

                {error && <Alert variant="danger" className="py-2">{error}</Alert>}

                <Form onSubmit={handleSubmit} noValidate>

                    <Form.Group className="mb-3" controlId="registerEmail">

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

                    <Form.Group className="mb-3" controlId="registerPassword">

                        <Form.Label>Contraseña</Form.Label>

                        <InputGroup>
                            <InputGroup.Text><FiLock /></InputGroup.Text>
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="new-password"
                                minLength={6}
                                required
                            />
                            <Button
                                variant="light"
                                className="auth-toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Ocultar contraseñas" : "Mostrar contraseñas"}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </Button>
                        </InputGroup>

                        <Form.Text>
                            Mínimo 6 caracteres.
                        </Form.Text>

                    </Form.Group>

                    <Form.Group className="mb-4" controlId="confirmPassword">

                        <Form.Label>Confirmar contraseña</Form.Label>

                        <InputGroup>
                            <InputGroup.Text><FiLock /></InputGroup.Text>
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                autoComplete="new-password"
                                required
                            />
                        </InputGroup>

                    </Form.Group>

                    <Button
                        type="submit"
                        variant="dark"
                        className="w-100 auth-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting && <Spinner animation="border" size="sm" className="me-2" />}
                        {isSubmitting ? "Registrando..." : "Registrarme"}
                    </Button>

                </Form>

                <p className="auth-footer text-center text-body-secondary mt-4 mb-0">
                    ¿Ya tenés una cuenta?{" "}
                    <Link to="/login" state={{ from }}>
                        Iniciar sesión
                    </Link>
                </p>

            </Card>

        </section>
    )
}

export default Register
