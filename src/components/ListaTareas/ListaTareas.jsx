import React from 'react';
import './ListaTareas.css'
import Tarea from '../Tarea/Tarea'

const ListaTareas = ({tareas,setTareas,mostrarCompletadas}) => {
      
      const toogleCompletada = (id) =>{
            setTareas(
                  tareas.map((tarea)=>{
                        if(tarea.id === id) return({...tarea, completada: !tarea.completada})
                        return tarea;
                  })
            )
      } 

      const actualizarTarea=(id,newTarea)=>{
            setTareas(
                  tareas.map((tarea)=>{
                        if(tarea.id === id) return({...tarea, texto: newTarea})
                        return tarea;
                  })
            )
      } 

      const eliminarTarea=(id)=>{
         setTareas(
               tareas.filter((tarea)=>tarea.id !== id )
               )
      }

    return (
        <ul className='lista-tareas'>
              {
                    tareas.length>0?
                    tareas.map((tarea)=>{
                                  if(mostrarCompletadas)
                                  {                    
                                        return <Tarea key={tarea.id} 
                                               tarea={tarea} 
                                               toogleCompletada={toogleCompletada}
                                               actualizarTarea={actualizarTarea}
                                               eliminarTarea={eliminarTarea}
                                               />
                                  }
                                    else if(!tarea.completada){
                                          return <Tarea key={tarea.id} 
                                                 tarea={tarea} 
                                                 toogleCompletada={toogleCompletada}
                                                 actualizarTarea={actualizarTarea}
                                                 eliminarTarea={eliminarTarea}
                                                 / >
                                    } 
                                    
                              })
                    :
                    <div className='lista-tareas__mensaje'>Agrega una tarea</div>
              }
        </ul>
      );
}
 
export default ListaTareas;