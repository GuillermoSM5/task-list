import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle,faCircle, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons'

const Tarea = ({tarea,toogleCompletada,actualizarTarea,eliminarTarea}) => {
    const [editar,setEditar]=useState(false);
    const [newTarea , setNewTarea]=useState(tarea.texto)
    
    const editarTarea =(e)=>{
        e.preventDefault();
        setEditar(false) 
        actualizarTarea(tarea.id,newTarea)
    }

    return (
        <li className='lista-tareas__tarea'>
          <FontAwesomeIcon icon={tarea.completada?faCheckCircle:faCircle} 
             className='lista-tareas__icono lista-tareas__icono-check'
             onClick={()=>toogleCompletada(tarea.id)}
             />
          <div className='lista-tareas__texto'>
             {editar?
               <form action="" className='formulario-editar-tarea' onSubmit={editarTarea}>
                 <input 
                 className='formulario-editar-tarea__input'
                value={newTarea}
                 onChange={(e)=>setNewTarea(e.target.value)}
                 />
                  <button type='submit' className='formulario-editar-tarea__btn'>editar</button>
               </form>
             :
             tarea.texto}  
         </div> 
         <div className='lista-tareas__contenedor-botones'>
         <FontAwesomeIcon icon={faEdit} className='lista-tareas__icono lista-tareas__icono-accion'onClick={()=>setEditar(!editar)}/>
         <FontAwesomeIcon icon={faTimes} className='lista-tareas__icono lista-tareas__icono-accion' onClick={()=>eliminarTarea(tarea.id)}/>
         </div>
         </li>
      );
}
 
export default Tarea;