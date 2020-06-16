import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { LinkContainer } from "react-router-bootstrap";



// if (userStatus === yaLogeado) {
//	nav tiene que mostrar los links apropiados a ese estado
//}

export const MyNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Please Recipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/register">
                    <Nav.Link >
                        Registrate
                        
                    </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                    <Nav.Link >
                        Iniciar Sesión
                        
                    </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
