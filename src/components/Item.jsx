import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {producto} ) => {
  return (
    <div className="producto">
      <img className='producto-img' src={producto.imagen} />
      <h2 className='producto-titulo'>{producto.nombre}</h2>
      <p className='producto-precio'>${producto.precio}</p>
      <p  className='producto-descripcion'>{producto.descripcion}</p>
      <Link to={`/item/${producto.id_producto}`} className='producto-info'>Ver mas detalles</Link>
      <button className='boton-agregar'>Comprar</button>
    </div>
  )
}