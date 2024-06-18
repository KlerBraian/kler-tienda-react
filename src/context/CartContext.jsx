import { createContext, useEffect, useState } from "react";
import { FaColonSign } from "react-icons/fa6";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    useEffect (() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
  
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

    const eliminarProducto = (producto) => {
        const productoEncontrado = carrito.find(prod => prod.id === producto.id);
        setCarrito(carrito.filter(prod => prod.id !== producto.id));
      }

    
    function sumarCantidad (producto) {
        console.log(producto)
            setCarrito(prevCarrito =>
                prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            );
        };
    
        function restarCantidad(producto){
            setCarrito(prevCarrito =>
                prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: Math.max(item.cantidad - 1, 0) }
                        : item
                )
            );
        };
         
    
    return (
        <CartContext.Provider value={ { carrito, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito, eliminarProducto, sumarCantidad, restarCantidad } }>
            {children}
        </CartContext.Provider>
    )
}