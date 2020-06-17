import React from 'react';
import { Tarjeta } from "./Card";
import { Container } from "react-bootstrap";


export const Grid = () => {
    return (
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
                <Tarjeta>

                </Tarjeta>
            </div>
        </Container>

    )
}
