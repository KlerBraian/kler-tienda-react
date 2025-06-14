import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const WishlistWidget = () => {

  const { calculateQuantityWish } = useContext(CartContext);

    return (
    <Link onClick={()=> setVisibleNav("")} className='wishwidget' to="/wishlist">Deseos🌟 { calculateQuantityWish ()}
    </Link>
      )
}

export default WishlistWidget