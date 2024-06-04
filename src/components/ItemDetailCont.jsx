import React, { useEffect, useState } from 'react'
import data from "../data/main.json"
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';

const ItemDetailCont = () => {

    let {itemId} = useParams ();

    let [producto, setProducto] = useState();

    useEffect(() => {
        setProducto(data.find((prod) => prod.id_producto === parseInt(itemId)))
    } ,[itemId])
   

  return (
    <div className='producto-detalles'>{producto ? <ItemDetail key={producto.id_} producto={producto}/> : "Cargando..."}</div>
  )
}

export default ItemDetailCont