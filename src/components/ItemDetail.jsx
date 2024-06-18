import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { FaCat } from "react-icons/fa";

export const ItemDetail = ( { producto } ) => {

    const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className='contenedor-individual'>
    <div className="producto-detalle individual">
        <img className='producto-img' src={producto.imagen} />
        <h1 className='producto-titulo'>{producto.nombre}</h1>
        <p className='producto-descripcion'>{producto.descripcion}</p>
        <p className='producto-precio'>${producto.precio}</p>
    </div>
    <div className='producto-opciones'>
              <FaCat className = "carrito"/>
              <button onClick={() => agregarAlCarrito(producto)} className='boton-agregar'>Agregar al carrito</button>
    </div>
    </div>
  )
}