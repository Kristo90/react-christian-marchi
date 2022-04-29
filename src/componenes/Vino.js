import React from "react";
import "../App";
// Importo los estilos
// import "../styles/style.css";

const Vino = ({vino, cart, setCart, vinos, descripcion }) => {

    // Constante que guarda las propiedades del estado de los vinos
    const {nombre, precio, id} = vino;

    // Funcion para agregar al Carrito
    const addVino = (id) => {
        const vino = vinos.filter((vino) => vino.id === id)
        setCart([...cart, ...vino]);
    };

    // Funcion para eliminar el vino
    const delVino = (id) => {
        const vinos = cart.filter(vino => vino.id !== id);
        setCart(vinos)
    }

    return (
        <ul className="container__content__vinos">
            <img className="container__content__vinos--image" src={image}></img>
            <li className="container__content__vinos--nombre">{nombre}</li>
            <li className="container_content_vinos--precio">${precio}</li>
            {vinos ? (
                <button
                    className="container__content__vinos--btnAdd"
                    type="button"
                    onClick={() => addVino(id)}
                >
                    Agregar +
                </button>
            ) : (
                <div>
                    <button
                        className="container__content__vinos--btnDel"
                        type="buttonn"
                        onClick={() => delVino(id)}
                    >
                        Eliminar
                    </button>
                    <button 
                        className="container__content__vinos-btnAdd"
                        type="button"
                        onClick={() => delVino(id)}
                    >
                        Confirmar
                    </button>
                </div>
            )}
        </ul>
    );
};

export default Vino;