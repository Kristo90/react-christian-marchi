import React from "react";
// Importo portada
import Portada from "../../images/Portada.png";
// importo Router Dom
import { Link } from "react-router-dom";
// Importo mi estilo
import '../../Styles/styles.css';

export const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="/">
                <h1>Inicio</h1>
            </Link>
            <Link to="/productos">
                <h1>Productos</h1>
            </Link>
            <img src={Portada} alt="inicio"></img>
        </div>
    )
}