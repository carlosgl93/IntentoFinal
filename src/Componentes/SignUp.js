import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Context } from "../Context/appContext.js";

const SignUp = props => {
    const { actions } = useContext(Context);

    const [state, setState] = useState({
        name: "",
        lastName: "",
        email: "",
        password: ""
    });

    // funcion asincrona para recibir datos del usuario y prevenir la carga automatica luego de hacer el submit
    const handleSubmit = async e => {
        e.preventDefault();
        if (state.name === state.lastName) {
            alert("Estas seguro que tu nombre es igual a tu apellido?");
            return;
        }

        const resp = await actions.register(state);
        if (resp.status) {
            // eslint-disable-next-line react/prop-types
            props.history.push("/");
        } else {
            alert(resp.message);
        }
    };

    // state actualiza a cada cosa que el usuario escribe & verificacion de datos a minuscula.
    const handleChange = e => {
        let value = e.target.value;
        if (e.target.value === "email") value = value.toLowerCase();
        
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h5>Registrate Aquí</h5>
                <Form.Group controlId="email">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Ingresa tu email"
                        required
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">We ll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        minLength="4"
                        maxLength="20"
                        placeholder="Password"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="firstName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Juan" onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control name="lastName" type="text" placeholder="Doe" onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
				</Button>
            </Form>
        </div>
    );
};

export default SignUp;
