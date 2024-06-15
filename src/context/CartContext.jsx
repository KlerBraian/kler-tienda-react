import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
  
    const agregarAlCarrito = (producto) => { 
        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item.id === producto.id);
            if (productoExistente) {
                return prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...prevCarrito, { ...producto, cantidad: 1 }];
            }
        });
    }
  
    const calcularCantidad = () => {
        return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    }

  
    const calcularTotal = () => {
        return Math.round(carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)).toFixed(2);
    }
    const vaciarCarrito = () => {
      setCarrito([]);
    }

    return (
        <CartContext.Provider value={ { carrito, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito } }>
            {children}
        </CartContext.Provider>
    )
}