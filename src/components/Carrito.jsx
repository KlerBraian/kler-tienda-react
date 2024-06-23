import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import 'toastify-js/src/toastify.css'

const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto, sumarCantidad, restarCantidad } = useContext(CartContext);

    return (
        <div>
            <div className='carrito-container'>
                <h2>Carrito de Compras</h2>
                {carrito.map(producto => (
                    <div key={producto.id} className="producto-carrito">
                        <div className='carrito-izquierda'>
                            <h3 className='producto-carrito-nombre'>{producto.nombre}</h3>
                        <p className='producto-carrito-cantidad'>Cantidad: <button onClick={() => restarCantidad(producto)} className="cantidad-resta">- </button> {producto.cantidad} <button onClick={() => sumarCantidad(producto)}  className="cantidad-suma"> +</button></p>
                        <button className='producto-carrito-eliminar' onClick={() => { eliminarProducto(producto) }}>Eliminar 🗑</button>
                        </div>
                        <div className='carrito-derecha'>
                        <p className='producto-carrito-precio'>Precio: ${producto.precio}</p>
                        <p className='producto-carrito-subtotal'>Subtotal: ${(producto.precio * producto.cantidad).toFixed(2)}</p>
                        </div>                  
                    </div>
                ))}
                <h3 className='carrito-total'>Total: ${calcularTotal()}</h3>
                <div className='container-opciones'>
                <button className='carrito-vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
                <button className='confirmar-compra' >
                    <Link to ="/finalizar-compra" className='confirmar-compra'>Finalizar Compra</Link>
                </button>
                </div>
                <div>
                <img className='carrito-impresora' src="../img/impresora.jfif" alt="" />
            </div> 
            </div>
           
        </div>
    );
}

export default Carrito;
