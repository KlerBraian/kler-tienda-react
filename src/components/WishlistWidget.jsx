import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

//Este componente muestra el numero de productos agregados a la wishlist en la pagina de inicio usando la funcion calculateQuantity traida del context

const WishlistWidget = () => {

  const { calculateQuantityWish } = useContext(CartContext);

    return (
    <Link onClick={()=> setVisibleNav("")} className='wishwidget' to="/wishlist">Deseos🌟 { calculateQuantityWish ()}
    </Link>
      )
}

export default WishlistWidget