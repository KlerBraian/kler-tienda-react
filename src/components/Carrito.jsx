import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {carrito.map(producto => (
                <div key={producto.id} className="producto-carrito">
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>Subtotal: ${(producto.precio * producto.cantidad).toFixed(2)}</p>
                </div>
            ))}
            <h3>Total: ${calcularTotal()}</h3>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    );
}

export default Carrito;
