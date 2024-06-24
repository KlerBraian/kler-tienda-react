import { createContext, useEffect, useState } from "react";
import { FaColonSign } from "react-icons/fa6";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; 


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(()=> {
        const carritoGuardado = localStorage.getItem("carrito");
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    
    useEffect (() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
  

    
    const [wish, setWishlist] = useState(()=> {
        const wishGuardado = localStorage.getItem("wishlist");
        return wishGuardado ? JSON.parse(wishGuardado) : [];
    });

    
    useEffect (() => {
        localStorage.setItem("wishlist", JSON.stringify(wish))
    }, [wish])


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
        
        const agregarAWishlist = (producto) => { 
            const productoExistente = wish.find(item => item.id === producto.id);
            if (productoExistente) {
                setWishlist(prevWish =>
                    prevWish.map(item =>
                        item.id === producto.id
                            ? { ...item, cantidad: item.cantidad + 1 }
                            : item
                    )
                );
            } else {
                setWishlist(prevWish => [...prevWish, { ...producto, cantidad: 1 }]);
            }
            Toastify({
                text: "Producto agregado a tu lista de deseos",
                className: "info",
                style: {
                  background: "#432163",
                  borderRadius: "0.5rem",
                }
              }).showToast();
        }


        const wishlistAddCarrito = (productos) => {
            let carritoActualizado = [...carrito];
            productos.forEach(producto => {
                const productoExistente = carritoActualizado.find(item => item.id === producto.id);
                if (productoExistente) {
                    carritoActualizado = carritoActualizado.map(item =>
                        item.id === producto.id
                            ? { ...item, cantidad: item.cantidad + producto.cantidad }
                            : item
                    );
                } else {
                    carritoActualizado.push({ ...producto });
                }
            });
    
            setCarrito(carritoActualizado);
            vaciarWishlist();
    
            Toastify({
                text: "Productos agregados al carrito",
                className: "info",
                style: {
                    background: "#432163",
                    borderRadius: "0.5rem",
                }
            }).showToast();
        };
       
        


    const calcularCantidad = () => {
        return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    }
    const calcularCantidadWish = () => {
        return wish.reduce((acc, producto) => acc + producto.cantidad, 0);
    }
  
    const calcularTotal = () => {
        return Math.round(carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)).toFixed(2);
    }

    const calcularTotalWish = () => {
        return Math.round(wish.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)).toFixed(2);
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

    const vaciarWishlist = () => {
        setWishlist([]);
        Toastify({
          text: "Has cumplido tus deseos",
          className: "info",
          style: {
            background: "#432163",
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

    const eliminarWish = (producto) => {
    const productoEncontrado = wish.find(prod => prod.id === producto.id);
    setWishlist(wish.filter(prod => prod.id !== producto.id));
    Toastify({
        text: "Has eliminado un deseo",
        className: "info",
        style: {
          background: "#432163",
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


        function sumarWish (producto) {
            console.log(producto)
                setWishlist(prevWish =>
                    prevWish.map(item =>
                        item.id === producto.id
                            ? { ...item, cantidad: item.cantidad + 1 }
                            : item
                    )
                );
            };
        
            function restarWish(producto){
                setWishlist(prevWish =>
                    prevWish.map(item =>
                        item.id === producto.id
                            ? { ...item, cantidad: Math.max(item.cantidad - 1, 0) }
                            : item
                    )
                );
            };
         
    
    return (
        <CartContext.Provider value={ { carrito, wish, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito, eliminarProducto, sumarCantidad, restarCantidad, agregarAWishlist,calcularCantidadWish, calcularTotalWish , sumarWish, restarWish, eliminarWish, vaciarWishlist, wishlistAddCarrito} }>
            {children}
        </CartContext.Provider>
    )
}