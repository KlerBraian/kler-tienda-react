import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import 'toastify-js/src/toastify.css'

const Carrito = () => {
    const { cart, calculateTotal, emptyCart, deleteProduct, sumQuantity, subtractQuantity } = useContext(CartContext);

    return (
        <div className='content-wishlist-cart'>
            <div className='carrito-container'>
                <h2>Carrito de Compras</h2>
                {cart.map(product => (
                    <div key={product.id} className="producto-carrito">
                        <div className='carrito-izquierda'>
                            <h3 className='producto-carrito-nombre'>{product.nombre}</h3>
                            <img className='img-wishlist' src={product.imagen} />
                        <p className='producto-carrito-cantidad'>Cantidad: <button onClick={() => subtractQuantity(product)} className="cantidad-resta">- </button> {product.quantity} <button onClick={() => sumQuantity(product)}  className="cantidad-suma"> +</button></p>
                        <button className='producto-carrito-eliminar' onClick={() => { deleteProduct(product) }}>Eliminar 🗑</button>
                        </div>
                        <div className='carrito-derecha'>
                        <p className='producto-carrito-precio'>Precio: ${product.precio}</p>
                        <p className='producto-carrito-subtotal'>Subtotal: ${(product.precio * product.quantity).toFixed(2)}</p>
                        </div>                  
                    </div>
                ))}
                <h3 className='carrito-total'>Total: ${calculateTotal()}</h3>
                <div className='container-opciones'>
                <button className='carrito-vaciar' onClick={emptyCart}>Vaciar Carrito</button>
                <button className='confirmar-compra' >
                    <Link to ="/finalizar-compra" className='confirmar-compra'>Finalizar Compra</Link>
                </button>
                </div>
            </div>
           
        </div>
    );
}

export default Carrito;
