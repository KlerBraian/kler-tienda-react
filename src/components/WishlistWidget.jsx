import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const WishlistWidget = () => {

  const { calcularCantidadWish } = useContext(CartContext);

    return (
    <Link className='wishwidget nav-item' to="/wishlist">Deseos🌟 { calcularCantidadWish ()}
    </Link>
      )
}

export default WishlistWidget