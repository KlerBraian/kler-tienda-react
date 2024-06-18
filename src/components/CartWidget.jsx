import React, { useContext } from 'react'
import { FaCat } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

  const { calcularCantidad } = useContext(CartContext);

  return (
    <Link className="carrito" to="/carrito">
     <FaCat className = "carrito"/> {calcularCantidad()}
    </Link>
  )
}