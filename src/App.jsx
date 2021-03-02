import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'

const App= () => {
  return (
    <div className="contenedor">
      <Header/>
      <Formulario/>
    </div>
  );
}

export default App;
