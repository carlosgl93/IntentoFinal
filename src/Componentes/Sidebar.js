import React from 'react';
import "../css/sidebar.css";
import Search from "./Search";


export const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>¿Qué hay en tu cocina?</h1>
            <h3>Descubre las recetas que puedes hacer con lo que tienes
            en tu refrigerador o despensa.
            </h3>
            <Search></Search>
        </div>
    )
}
