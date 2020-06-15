import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import SignIn from "./SignIn";
import SignUp from "./SignUp";



// if (userStatus === yaLogeado) {
//	nav tiene que mostrar los links apropiados a ese estado
//}

export const MyNav = () => {
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg">
            <Navbar.Brand as={Link} to="/">
                Please Recipes
			</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <SignIn></SignIn>
              <SignUp></SignUp>
                
            </Navbar.Collapse>
        </Navbar>
    );
};
