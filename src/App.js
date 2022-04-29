import React, { Fragment, useState } from 'react';

// Importo el componente Vino.js
import Vino from './componenes/Vino';

// Importo el componente Cart.js
import Cart from './componenes/Cart';

// Importo los Estilos
import "./styles/styles.css";

// Importo las imagenes
import CircusMalbec from './images/Circus-Malbec.gif';
import CircusCabernet from './images/Circus-Cabernetsauvignon.gif';
import LaLindaCabernet from './images/La-Linda-Cabernet-Sauvignon.jpg';
import LaLindaMalbec from './images/La-Linda-Malbec.jpg';
import Latitud33Cabernet from './images/Latitud33-Cabernet.jpg';
import Latitud33Malbec from './images/Latitud33-Malbec.jpg';

function App() {

  // Estado de Vinos con el listado.
  const [vinos, setVinos] = useState([
    { id: 1, image: CircusMalbec, nombre: 'Circus Malbec', precio: 420 },
    { id: 2, image: CircusCabernet, nombre: 'Circus Cabernnet', precio: 420 },
    { id: 3, image: LaLindaMalbec, nombre: 'La Linda Malbec', precio: 820 },
    { id: 4, image: LaLindaCabernet,  nombre: 'La Linda Cabernet', precio: 820 },
    { id: 5, image: Latitud33Malbec, nombre: 'Latitud 33 Malbec', precio: 600 },
    { id: 6, image: Latitud33Cabernet, nombre: 'Latitud 33 Cabernet', precio: 600 },
  ]);
  
  // Estado del carrito
  const [cart, setCart] = useState([]);

  return (
    <Fragment>
      {/* Section global */}
      <section className='container'>
        {/* Section del header */}
        <section className='container__header'>
          {/* Titulo del header */}
          <div className='container__header_title'>
            <h3 className='container__header__title_text'>Warehouse</h3>
          </div>

          {/* Boton del header */}
          <div className='container__header_menu'>
            <button className='container__header_menu_button'></button>
          </div>

          {/* Carrito del header */}
          <div className='container__header_cartDiv'>
            <Cart cart={cart} setCart={setCart} />
          </div>
        </section>
        {/* Section principal */}
        <section className='container__content'>
          <div className='container__content_title'>
            <h1>Bienvenidos a Warehouse | Bebidas</h1>
          </div>
          <div className='container__content__listVinos'>
            {vinos.map((vino) => (
              <vino
                key={vino.id}
                vino={vino}
                cart={cart}
                setCart={setCart}
                vinos={vinos}
              />
            ))}
          </div>
        </section>
        {/* Section footer */}
        <section className='container__footer'>
          <p>Warehouse 2022 - Todos los derechos reservados - Programador Christian Marchi</p>
        </section>
      </section>
    </Fragment>
  );
}

export default App;
