import React, { useState, useContext } from "react";
import { Context } from "../Context/appContext.js";

const { actions } = useContext(Context);

const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
});

// funcion asincrona para recibir datos del usuario y prevenir la carga automatica luego de hacer el submit
export const handleSubmit = async e => {
    e.preventDefault();
    if (state.name === state.lastName) {
        alert("Estas seguro que tu nombre es igual a tu apellido?");
        return;
    }

    const resp = await actions.login(state);
    if (resp.status) {
        // eslint-disable-next-line react/prop-types
        props.history.push("/");
    } else {
        alert(resp.message);
    }
};

// state actualiza a cada cosa que el usuario escribe & verificacion de datos a minuscula.
export const handleChange = e => {
    let value = e.target.value;
    if (e.target.value === "email") value = value.toLowerCase();
};