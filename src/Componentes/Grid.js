import React from 'react';
import { Tarjeta } from "./Card";
import { Container } from "react-bootstrap";


export const Grid = () => {
    return (
<<<<<<< HEAD
        <Container>
            <div className="row">
                <div className="col-md-12 col-12">
                    <div className="float-right">
                        <h1>Recetas</h1>
                        {/* aqui va el fetch */}
                        <button>
                            Buscar Recetas
                </button>
                    </div>
                </div>



            </div>
            <div className="row pt-5">
=======
        <div className="grid col-8">
            <div>
                <h1>Recetas</h1>
                {/* aqui va el fetch */}
                
            </div>
            <div className="cardGrid">
>>>>>>> fe6ad255d07a30af0d3a3ce1769e146fa3eed9b3
                <Tarjeta>
                </Tarjeta>
            </div>
        </Container>

    )
}
