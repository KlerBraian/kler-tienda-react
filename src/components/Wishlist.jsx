import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import 'toastify-js/src/toastify.css'
const Wishlist = () => {
    const { wish, calculateTotalWish, emptyWishlist, deleteWish, sumWish, subtractWish, wishlistAddCart} = useContext(CartContext);

    return (
        <div className='content-wishlist-cart'>
            <div className='cart-container'>
                <h2>Lista de deseos</h2>
                {wish.map(product => (
                    <div key={product.id} className="product-cart">
                        <div className='cart-left'>
                            <h3 className='product-cart-name'>{product.nombre}</h3>
                            <img className='img-wishlist' src={product.imagen} />
                        <p className='product-cart-quantity'>Cantidad: <button onClick={() => subtractWish(product)} className="cantidad-resta wish">- </button> {product.quantity} <button onClick={() => sumWish(product)}  className="cantidad-suma wish"> +</button></p>
                        <button className='product-cart-delete wish' onClick={() => {deleteWish(product) }}>Eliminar 🗑</button>
                        </div>
                        <div className='cart-right'>
                        <p className='product-cart-price'>Precio: ${product.precio}</p>
                        <p className='product-cart-subtotal'>Subtotal: ${(product.precio * product.quantity).toFixed(2)}</p>
                        </div>                  
                    </div>
                ))}
                <h3 className='cart-total'>Total: ${calculateTotalWish()}</h3>
                <div className='container-options'>
                <button className='cart-empty wish' onClick={emptyWishlist}>Vaciar lista de deseos</button>
                <button className='cart-empty wish' onClick={() => wishlistAddCart(wish)}>Agregar al carrito</button>
                </div>

            </div>
           
        </div>
    );
}


export default Wishlist