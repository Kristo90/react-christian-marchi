import React, { Fragment } from "react";

// Importo el componente Vino
import Vino from './Vino';

// Importo los estilos
import "../styles/styles.css";

const Cart = ({cart, setCart}) => {
    const viewCart = () => {
        {
            document.querySelector(
                "div.container__header__cartDiv__list"
            ).style.display = "none"
                ? (document.querySelector(
                    "div.container__header__cartDiv__list"
                    ).style.display = "flex")
                :   (document.querySelector(
                    "div.container__header__cartDiv__list"
                    ).style.display = "none");
        }
    };

    const closeDiv = () => {
        document.querySelector(
            "div.container__header__cartDiv__list"
        ).style.display = "none";
    };

    return (
        <Fragment>
            <div className="container__header__cartDiv">
                <p className="container__header__cartDiv--count">{cart.lengh}</p>
                <button 
                    className="container__header__cartDiv--btnCart"
                    onClick={() => viewCart}
                ></button>
            </div>
            <div className="container__header__cartDiv__list">
                <button
                    className="container__content__vinos--btnClose"
                    type="button"
                    onClick={() => closeDiv()}
                >
                    X
                </button>
                {cart.lengh === 0 ? (
                    <p>No hay nada por aquí...</p>
                ) : (
                    cart.map((vino) => (
                        <Vino
                            key={vino.id}
                            vino={vino}
                            cart={cart}
                            setCart={setCart}
                        />
                    ))
                )}
            </div>
        </Fragment>
    );
};

export default Cart;