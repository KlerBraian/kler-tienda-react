import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import 'toastify-js/src/toastify.css'
const Wishlist = () => {
    const { wish, calcularTotalWish, vaciarWishlist, eliminarWish, sumarWish, restarWish, wishlistAddCarrito} = useContext(CartContext);

    return (
        <div className='content-wishlist-cart'>
            <div className='carrito-container'>
                <h2>Lista de deseos</h2>
                {wish.map(producto => (
                    <div key={producto.id} className="producto-carrito">
                        <div className='carrito-izquierda'>
                            <h3 className='producto-carrito-nombre'>{producto.nombre}</h3>
                            <img className='img-wishlist' src={producto.imagen} />
                        <p className='producto-carrito-cantidad'>Cantidad: <button onClick={() => restarWish(producto)} className="cantidad-resta wish">- </button> {producto.cantidad} <button onClick={() => sumarWish(producto)}  className="cantidad-suma wish"> +</button></p>
                        <button className='producto-carrito-eliminar wish' onClick={() => { eliminarWish(producto) }}>Eliminar 🗑</button>
                        </div>
                        <div className='carrito-derecha'>
                        <p className='producto-carrito-precio'>Precio: ${producto.precio}</p>
                        <p className='producto-carrito-subtotal'>Subtotal: ${(producto.precio * producto.cantidad).toFixed(2)}</p>
                        </div>                  
                    </div>
                ))}
                <h3 className='carrito-total'>Total: ${calcularTotalWish()}</h3>
                <div className='container-opciones'>
                <button className='carrito-vaciar wish' onClick={vaciarWishlist}>Vaciar lista de deseos</button>
                <button className='carrito-vaciar wish' onClick={() => wishlistAddCarrito(wish)}>Agregar al carrito</button>
                </div>

            </div>
           
        </div>
    );
}


export default Wishlist