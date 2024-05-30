import React from 'react'

export const NuestrasMarcasItem = ( {marca} ) => {
  return (
    <div className="marca">
      <img src={marca.imagen} />
      <h2>{marca.nombre}</h2>
      <p>{marca.descripcion}</p>
    </div>
  )
}

