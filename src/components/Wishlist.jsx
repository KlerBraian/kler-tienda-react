import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import 'toastify-js/src/toastify.css'
const Wishlist = () => {
    const { wish, calculateTotalWish, emptyWishlist, deleteWish, sumWish, subtractWish, wishlistAddCart} = useContext(CartContext);

    return (
        <div className='content-wishlist-cart'>
            <div className='carrito-container'>
                <h2>Lista de deseos</h2>
                {wish.map(product => (
                    <div key={product.id} className="producto-carrito">
                        <div className='carrito-izquierda'>
                            <h3 className='producto-carrito-nombre'>{product.nombre}</h3>
                            <img className='img-wishlist' src={product.imagen} />
                        <p className='producto-carrito-cantidad'>Cantidad: <button onClick={() => subtractWish(product)} className="cantidad-resta wish">- </button> {product.quantity} <button onClick={() => sumWish(product)}  className="cantidad-suma wish"> +</button></p>
                        <button className='producto-carrito-eliminar wish' onClick={() => { deleteWish(product) }}>Eliminar 🗑</button>
                        </div>
                        <div className='carrito-derecha'>
                        <p className='producto-carrito-precio'>Precio: ${product.precio}</p>
                        <p className='producto-carrito-subtotal'>Subtotal: ${(product.precio * product.quantity).toFixed(2)}</p>
                        </div>                  
                    </div>
                ))}
                <h3 className='carrito-total'>Total: ${calculateTotalWish()}</h3>
                <div className='container-opciones'>
                <button className='carrito-vaciar wish' onClick={emptyWishlist}>Vaciar lista de deseos</button>
                <button className='carrito-vaciar wish' onClick={() => wishlistAddCart(wish)}>Agregar al carrito</button>
                </div>

            </div>
           
        </div>
    );
}


export default Wishlist