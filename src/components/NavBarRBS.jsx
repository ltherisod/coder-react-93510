import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Button, Alert } from 'react-bootstrap';

import logoShop from "../assets/logo-shop.png";
import "../assets/styles/Navbar.css";
import "../assets/styles/Auth.css";
import { FiLogOut } from "react-icons/fi";

import CartWidget from './CartWidget';

import { NavLink } from 'react-router-dom';

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function NavBarRBS() {

    const { user, logout, loading } = useContext(AuthContext);

    const [error, setError] = useState("");
    const [closing, setClosing] = useState(false);

    const handleLogout = async () => {

        setError("");
        setClosing(true);

        try {

            await logout();

        } catch {

            setError("No se pudo cerrar sesión.");

        } finally {

            setClosing(false);

        }
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">

                <Container>

                    <Navbar.Brand as={NavLink} to="/">
                        <img src={logoShop} alt="logo" className="logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link as={NavLink} to="/">
                                Home
                            </Nav.Link>

                            <NavDropdown title="Productos" id="basic-nav-dropdown">

                                <NavDropdown.Item as={NavLink} to="/category/ofertas">
                                    Ofertas
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item as={NavLink} to="/category/nuevos">
                                    Nuevos
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item as={NavLink} to="/category/mas vendidos">
                                    Más Vendidos
                                </NavDropdown.Item>

                            </NavDropdown>

                        </Nav>

                        <Nav className="flex-row flex-wrap align-items-center gap-2 me-lg-3 my-2 my-lg-0">

                            {!loading && (
                                user ? (
                                    <NavDropdown
                                        align="end"
                                        id="user-dropdown"
                                        title={
                                            <span className="d-inline-flex align-items-center gap-2">
                                                <span className="user-avatar">
                                                    {user.email?.charAt(0)}
                                                </span>
                                                <span className="user-email d-inline-block">
                                                    {user.email}
                                                </span>
                                            </span>
                                        }
                                    >
                                        <NavDropdown.ItemText className="small text-body-secondary">
                                            Sesión iniciada como
                                            <br />
                                            <strong className="text-body">{user.email}</strong>
                                        </NavDropdown.ItemText>

                                        <NavDropdown.Divider />

                                        <NavDropdown.Item
                                            as="button"
                                            onClick={handleLogout}
                                            disabled={closing}
                                            className="d-flex align-items-center gap-2"
                                        >
                                            <FiLogOut />
                                            {closing ? "Cerrando..." : "Cerrar sesión"}
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <>
                                        <Button as={NavLink} to="/login" variant="outline-dark" size="sm">
                                            Iniciar sesión
                                        </Button>

                                        <Button as={NavLink} to="/register" variant="dark" size="sm">
                                            Registrarse
                                        </Button>
                                    </>
                                )
                            )}

                        </Nav>

                        <CartWidget />

                    </Navbar.Collapse>

                </Container>

            </Navbar>

            {error && (
                <Alert variant="danger" className="m-3">
                    {error}
                </Alert>
            )}
        </>
    );
}

export default NavBarRBS;