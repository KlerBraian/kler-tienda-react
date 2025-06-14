import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import 'toastify-js/src/toastify.css'

const Carrito = () => {
    const { cart, calculateTotal, emptyCart, deleteProduct, sumQuantity, subtractQuantity } = useContext(CartContext);

    return (
        <div className='content-wishlist-cart'>
            <div className='cart-container'>
                <h2>Carrito de Compras</h2>
                {cart.map(product => (
                    <div key={product.id} className="product-cart">
                        <div className='cart-left'>
                            <h3 className='product-cart-name'>{product.nombre}</h3>
                            <img className='img-wishlist' src={product.imagen} />
                        <p className='product-cart-quantity'>Cantidad: <button onClick={() => subtractQuantity(product)} className="cantidad-resta">- </button> {product.quantity} <button onClick={() => sumQuantity(product)}  className="cantidad-suma"> +</button></p>
                        <button className='product-cart-delete' onClick={() => { deleteProduct(product) }}>Eliminar 🗑</button>
                        </div>
                        <div className='cart-right'>
                        <p className='product-cart-price'>Precio: ${product.precio}</p>
                        <p className='product-cart-subtotal'>Subtotal: ${(product.precio * product.quantity).toFixed(2)}</p>
                        </div>                  
                    </div>
                ))}
                <h3 className='cart-total'>Total: ${calculateTotal()}</h3>
                <div className='container-options'>
                <button className='cart-empty' onClick={emptyCart}>Vaciar Carrito</button>
                <button className='purchase' >
                    <Link to ="/finalizar-compra" className='purchase'>Finalizar Compra</Link>
                </button>
                </div>
            </div>
           
        </div>
    );
}

export default Carrito;
