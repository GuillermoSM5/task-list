import React,{useState} from 'react';
import './App.css'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import ListaTareas from './components/ListaTareas/ListaTareas'

const App= () => {
  const [tareas,setTareas]=useState([]);

  console.log(tareas);
  return (
    <div className="contenedor">
      <Header/>
      <Formulario tareas={tareas} setTareas={setTareas}/>
      <ListaTareas tareas={tareas}/>
    </div>
  );
}

export default App;
