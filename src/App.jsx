import React,{useState, useEffect} from 'react';
import './App.css'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import ListaTareas from './components/ListaTareas/ListaTareas'

const App= () => {

  //obtenemos las tareas guardadas de localstorage
  const tareasGuardadas = localStorage.getItem('tareas')?JSON.parse(localStorage.getItem('tareas')):[]
  //obtenemos el estado de mostrar completados
  let  configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas=true;
  }  else configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';                                      
  //establecemos el estado de las tareas
  const [tareas,setTareas]=useState(tareasGuardadas);
  const [mostrarCompletadas,setMostrarCompletadas]=useState(configMostrarCompletadas);

  //Estableciendo el estado en localstorage
  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas));  
  },[tareas]);

  //estamos guardando el estado de tareas completadas
  useEffect(()=>{
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());  
  },[mostrarCompletadas]);

  
  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas}/>
      <Formulario tareas={tareas} setTareas={setTareas}/>
      <ListaTareas 
      tareas={tareas}
      setTareas={setTareas} 
      mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
