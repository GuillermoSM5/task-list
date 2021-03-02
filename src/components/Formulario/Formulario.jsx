import React,{useState} from 'react';
import './Formulario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid'

const Formulario = ({tareas,setTareas}) => {
    const add = <FontAwesomeIcon icon={faPlus} className='formulario-tareas__icon-button'/>
    const [tarea,setTarea]=useState('');
   
    const sInputTarea=(e)=>{
      setTarea(e.target.value)
    }
   
    const sTareas = (e) =>{
       e.preventDefault()
       setTareas([...tareas,{
         id: uuid(),
         texto: tarea,
         completada: false
       }])
       setTarea('');
    }
    
    return ( 
        <form action="" className='formulario-tareas' onSubmit={sTareas}>
            <input
             type="text" 
             className='formulario-tareas__input'
             placeholder='Escribe un tarea'
             value={tarea}
             onChange={sInputTarea}
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