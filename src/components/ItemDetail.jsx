import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { FaCat } from "react-icons/fa";

export const ItemDetail = ( { producto } ) => {

    const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className='contenedor-individual'>
    <div className="producto-detalle-individual">
        <h1 className='producto-titulo-individual'>{producto.nombre}</h1>
        <img className='producto-img-individual' src={producto.imagen} />
        <p className='producto-descripcion-individual'>{producto.descripcion}</p>
        <p className='producto-precio-individual'>${producto.precio}</p>
        <button onClick={() => agregarAlCarrito(producto)} className='boton-agregar-individual'>Agregar al carrito</button>
    </div>
</div>
  )
}