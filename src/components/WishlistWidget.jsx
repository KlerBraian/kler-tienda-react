import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const WishlistWidget = () => {

  const { calcularCantidadWish } = useContext(CartContext);

    return (
    <Link onClick={()=> setVisibleNav("")} className='wishwidget' to="/wishlist">Deseos🌟 { calcularCantidadWish ()}
    </Link>
      )
}

export default WishlistWidget