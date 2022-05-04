import React from 'react';
// Importo Header
import { Header } from './componentes/Header';
// Importo mi paginas
import { Paginas } from "./componentes/Paginas";
// Importo mi estilo
import './Styles/styles.css';
// Importo Boxicons
import 'boxicons';
// Importo Router Dom
import { BrowserRouter as Router, Route } from "react-router-dom";
// Importo el Data Provider
import { DataProvider } from "./context/Dataprovider";

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <Router>
        <Header />
        <Paginas />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
