import React from 'react'
import { Item } from './Item'

//Este componente realiza el mapeo de los productos que fueron traidos de la base de datos para luego renderizarlos en el componente Item en una grilla de productos con sus detalles 

export const ItemList = ( {products} ) => {

    return (
      <div key={products.id} className ="products-grilla">
          {
            products.length > 0 ?
            products.map(product => {
              return <Item key={product.id} product={product} />
            })
            : <p>Cargando productos...</p>
          }
      </div>
    )
  }