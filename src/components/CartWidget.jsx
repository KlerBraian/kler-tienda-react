import React, { useContext } from 'react'
import { FaCat } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

//Este componente muestra el numero de productos agregados al carrito en la pagina de inicio usando la funcion calculateQuantity traida del context

export const CartWidget = () => {

const { calculateQuantity } = useContext(CartContext);

  return (
    <Link onClick={()=> setVisibleNav("")} className="cart" to="/carrito">
     <FaCat className = "cart"/> <FaShoppingCart /> {calculateQuantity()}
    </Link>
  )
}