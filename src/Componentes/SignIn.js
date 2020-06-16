import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


const SignIn = props => {


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
            <h1>Iniciar Sesión</h1>

            <label>Email*</label>
            <br></br>

            <input name="email" ref={register({ required: true })} />
            <br></br>
            {errors.email && <p>Este campo es requerido</p>}
            <label>Nombre de usuario*</label>
            <br></br>

            <input name="password" ref={register({ required: true })} />
            {errors.password && <p>Este campo es requerido</p>}

            <input type="submit" />
        </form>
    );
};

export default SignIn;
