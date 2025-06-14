import React from 'react'
import { Item } from './Item'

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