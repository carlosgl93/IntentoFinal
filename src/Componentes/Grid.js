import React from 'react';
import { Tarjeta } from "./Card";
import "../css/grid.css"

export const Grid = () => {
    return (
        <div className="grid">
            <div>
                <h1>Recetas</h1>
                {/* aqui va el fetch */}
                <button>
                    Buscar Recetas
                </button>
            </div>
            <div>
                <Tarjeta>

                </Tarjeta>
            </div>

        </div>
    )
}
