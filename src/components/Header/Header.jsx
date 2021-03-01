import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const visible = <FontAwesomeIcon icon={faEyeSlash} className='header__icon-boton'/>
    return ( 
        <header className='Header'>
            <h1 className='header__title'>Lista de Tareas</h1>
            <button className='header__button'>No mostrar completadas {visible}</button>
        </header>
     );
}
 
export default Header;