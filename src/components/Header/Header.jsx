import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Header = ({setMostrarCompletadas,mostrarCompletadas}) => {
    
    const visible = <FontAwesomeIcon icon={mostrarCompletadas?faEye:faEyeSlash} className='header__icon-boton'/>
    const toogeCompletada = () =>{
        setMostrarCompletadas(!mostrarCompletadas);
       
    }
    
    return ( 
        <header className='Header'>
            <h1 className='header__title'>Lista de Tareas</h1>
            {  
            mostrarCompletadas?
               <button onClick={()=>toogeCompletada()} className='header__button'>No mostrar completadas {visible}</button>
               :
               <button onClick={()=>toogeCompletada()} className='header__button'>Mostrar completadas {visible}</button>
            }      
            </header>
     );
}
 
export default Header;