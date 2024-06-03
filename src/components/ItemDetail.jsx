import React from 'react'

export const ItemDetail = ({producto}) => {
  return (
    <div  className="producto">
        <h2 className='producto-titulo'>{producto.nombre}</h2>
        <img className='producto-img' src={producto.imagen}/>
        <p className='producto-precio'>${producto.precio}</p>
        <p className='producto-descripcion'>{producto.descripcion}</p>
        <button>Comprar</button>
    </div>
  )
}
