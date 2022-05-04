import React from "react";
// Importo Router Dom
import { Routes, Route } from "react-router-dom";
// Importo Inicio
import { Inicio } from "./Inicio/index";
// Importo Productos
import { ProductosLista } from "./Productos/index";

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" exact component={Inicio} />
                <Route path="/" exact component={ProductosLista} />
            </Routes>
        </section>

    )
}

export default Paginas;