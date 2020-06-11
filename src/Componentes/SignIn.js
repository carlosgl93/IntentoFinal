import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { handleSubmit, handleChange } from "./SignUp";

// import firebase from "../firebase/config";
// import { Auth } from "./authContext";

const SignIn = () => {
    const { actions } = useContext(Context);

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    return (
        <div>
            <Form onSubmit={this.handleSubmit}>
                <h5>Sign In</h5>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control placeholder="Enter email" onChange={this.handleChange} />
                    <Form.Text className="text-muted">We ll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Password" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
				</Button>
            </Form>
        </div>
    );
};

export default SignIn;
