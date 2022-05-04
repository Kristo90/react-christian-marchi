import React from "react";
// Importo la imagen del logo
import Warehouse from "../../images/Warehouse.png";
// Importo mi estilo
import '../../Styles/styles.css';
// Importo Router Dom
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={Warehouse} alt="logo" width="150" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    )
}
