import React from 'react';
import './Formulario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Formulario = () => {
    const add = <FontAwesomeIcon icon={faPlus} className='formulario-tareas__icon-button'/>
    return ( 
        <form action="" className='formulario-tareas'>
            <input
             type="text" 
             className='formulario-tareas__input'
             placeHolder='Escribe un tarea'
             />

            <button
              type='submit'
              className='formulario-tareas__button'
            >
            {add}
            </button>

        </form>
     );
}
 
export default Formulario;