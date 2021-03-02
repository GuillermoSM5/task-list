import React from 'react';

const ListaTareas = ({tareas}) => {
    return (
        <ul className='lista-tareas'>
              {
                    tareas.map((tarea)=><li key={tarea.id}>{tarea.texto}</li>)
              }
        </ul>
      );
}
 
export default ListaTareas;