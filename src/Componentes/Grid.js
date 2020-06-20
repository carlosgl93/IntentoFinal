import React from 'react';
import { Tarjeta } from "./Card";
import "../css/grid.css"

export const Grid = () => {
    return (
        <div className="grid col-8">
            <div>
                <h1>Recetas</h1>
                {/* aqui va el fetch */}
                
            </div>
            <div className="cardGrid">
                <Tarjeta>
                </Tarjeta>
            </div>

        </div>
    )
}
