import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { useForm,  } from "react-hook-form";


const SignUp = props => {
    
    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
            <h1>Registrate Aquí</h1>
            
            <label>Nombre*</label>
            <br></br>
            <input name="nombre" ref={register({ required: true, minLength: 4})} />
            <br></br>
            {errors.nombre && <p>Este campo es requerido</p>}

            <label>Apellido*</label>
            <br></br>

            <input name="apellido" ref={register({ required: true, minLength: 4})} />
            <br></br>
            {errors.nombre && <p>Este campo es requerido</p>}
            <label>Email*</label>
            <br></br>

            <input name="email" ref={register({ required: true})} />
            <br></br>
            {errors.email && <p>Este campo es requerido</p>}
            <label>Nombre de usuario*</label>
            <br></br>

            <input name="password" ref={register({ required: true})} />
            {errors.password && <p>Este campo es requerido</p>}
            <br></br>
            <input type="submit" />
        </form>
    );
};

export default SignUp;
