import React from 'react'

export const ItemDetail = ({producto}) => {
  return (
    <div  className="producto">
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen}/>
        <p>${producto.precio}</p>
        <p>{producto.descripcion}</p>
        <button>Comprar</button>
    </div>
  )
}
