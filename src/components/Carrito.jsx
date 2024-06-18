import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto, sumarCantidad, restarCantidad } = useContext(CartContext);

    return (
        <div>
            <div>
                <h2>Carrito de Compras</h2>
                {carrito.map(producto => (
                    <div key={producto.id} className="producto-carrito">
                        <div>
                        <h3>{producto.nombre}</h3>
                        <button onClick={() => { eliminarProducto(producto) }}>🗑</button>
                        </div>
                        <p>Precio: ${producto.precio}</p>
                        <p>Cantidad: <button onClick={() => restarCantidad(producto)} className="cantidad-resta">- </button> {producto.cantidad} <button onClick={() => sumarCantidad(producto)}  className="cantidad-suma"> +</button></p> 
                        <p>Subtotal: ${(producto.precio * producto.cantidad).toFixed(2)}</p>
                        
                    </div>
                ))}
                <h3>Total: ${calcularTotal()}</h3>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link to ="/finalizar-compra">Finalizar Compra</Link>
            </div>
            <div>
                <p>maquina</p>
            </div>
        </div>
    );
}

export default Carrito;
