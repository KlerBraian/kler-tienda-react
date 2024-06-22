import { createContext, useEffect, useState } from "react";
import { FaColonSign } from "react-icons/fa6";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; 


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    useEffect (() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
  
    const agregarAlCarrito = (producto) => { 
            const productoExistente = carrito.find(item => item.id === producto.id);
            if (productoExistente) {
                setCarrito(prevCarrito =>
                    prevCarrito.map(item =>
                        item.id === producto.id
                            ? { ...item, cantidad: item.cantidad + 1 }
                            : item
                    )
                );
            } else {
                setCarrito(prevCarrito => [...prevCarrito, { ...producto, cantidad: 1 }]);
            }
            Toastify({
                text: "Producto agregado al carrito",
                className: "info",
                style: {
                  background: "#003148",
                  borderRadius: "0.5rem",
                }
              }).showToast();
        }
        
    const calcularCantidad = () => {
        return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    }

  
    const calcularTotal = () => {
        return Math.round(carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)).toFixed(2);
    }
    const vaciarCarrito = () => {
      setCarrito([]);
      Toastify({
        text: "Has vaciado el carrito",
        className: "info",
        style: {
          background: "#003148",
          borderRadius: "0.5rem",
        }
      }).showToast();
    }

    const eliminarProducto = (producto) => {
        const productoEncontrado = carrito.find(prod => prod.id === producto.id);
        setCarrito(carrito.filter(prod => prod.id !== producto.id));
        Toastify({
            text: "Has eliminado un producto",
            className: "info",
            style: {
              background: "#003148",
              borderRadius: "0.5rem",
            }
          }).showToast();
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