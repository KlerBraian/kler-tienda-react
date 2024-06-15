import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Item = ( {producto} ) => {

  const {agregarAlCarrito} = useContext(CartContext);

  return (
    <div className="producto">
      <div className='img-container'>
      <img className='producto-img' src={producto.imagen} />
      </div>
    
      <h2 className='producto-titulo'>{producto.nombre}</h2>
      <p className='producto-precio'>${producto.precio}</p>
      <p className='producto-descripcion'>{producto.descripcion}</p>
      <Link to={`/item/${producto.id}`} className='producto-info'>Ver más detalles</Link>
      <button onClick={() => agregarAlCarrito(producto)} className='boton-agregar'>Agregar al carrito</button>
    </div>
  )
}