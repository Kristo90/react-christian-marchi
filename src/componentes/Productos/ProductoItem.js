import React from "react";
// Importo mis imagenes
import IMG from "../../images/Circus-Cabernetsauvignon.gif";

export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category,
}) => {
    return (
        <div className="producto">
            <a href="#!">
                <div className="producto__img">
                    <img src={image.defaul} alt={title}></img>
                </div>
            </a>
            <div className="producto__footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price}</p>
            </div>
            <div className="buttom">
                <button className="btn">
                    Añadir al carrito
                </button>
                <a href="#!" className="btn">Información</a>
            </div>
        </div>
    )
}