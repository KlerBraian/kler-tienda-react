import React, { useContext } from 'react'
import { FaCat } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

const { calculateQuantity } = useContext(CartContext);

  return (
    <Link onClick={()=> setVisibleNav("")} className="carrito" to="/carrito">
     <FaCat className = "carrito"/> <FaShoppingCart /> {calculateQuantity()}
    </Link>
  )
}