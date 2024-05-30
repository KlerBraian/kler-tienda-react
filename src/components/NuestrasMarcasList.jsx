import React from 'react'
import { NuestrasMarcasItem } from './NuestrasMarcasItem'


export const NuestrasMarcasList = ( {marcas} ) => {

    return (
      <div className="marcas-grilla">
          {
            marcas.length > 0 ?
            marcas.map(marca => {
              return <NuestrasMarcasItem key={marca.nombre} marca={marca} />
            })
            : <p>No hay marcas</p>
          }
      </div>
    )
  }