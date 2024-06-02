import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos} ) => {

    return (
      <div key={productos.id} className ="productos-grilla">
          {
            productos.length > 0 ?
            productos.map(producto => {
              return <Item key={producto.id} producto={producto} />
            })
            : <p>Cargando productos...</p>
          }
      </div>
    )
  }