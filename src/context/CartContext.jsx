import { createContext, useEffect, useState } from "react";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

//Contexto de funciones que se utilizaran en los componentes del programa

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {   //Creamos un estado de carrito que guarda el carrito del usuario en localStorage, en caso de tener un carrito en el storage lo obtenemos
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];//Manejamos el caso de crear un carrito vacio ante cualquier problema
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart)) //Lo guardamos en localStorage
    }, [cart])



    const [wish, setWishlist] = useState(() => {  //Mismo funcionamiento del carrito pero esta vez con la wishlist
        const savedWish = localStorage.getItem("wishlist");
        return savedWish ? JSON.parse(savedWish) : [];
    });


    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wish))
    }, [wish])


//Funcion que agregar los productos al carrito. Chequea si el producto existe en el carrito para solo modificar la cantidad, si no existe agrega el producto al carrito    
    const addToCart = (product) => {   
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(prevCart =>  //Creamos una copia del carrito existente
                prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }  //Si existe el producto modificamos cantidad
                        : item
                )
            );
        } else { 
            setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]); //Si no existe se agrega al carrito
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

//Mismo funcionamiento de addToCart pero este caso es para wishlist
    const addToWishlist = (product) => {
        const existingProduct = wish.find(item => item.id === product.id);
        if (existingProduct) {
            setWishlist(prevWish =>
                prevWish.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setWishlist(prevWish => [...prevWish, { ...product, quantity: 1 }]);
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

//Esta funcion es para agregar los productos de nuestra wishlist al carrito, hacemos una copia del carrito que obtenemos del estado cart, recorremos los productos para ver si solo se modifica la cantidad en el caso 
//que el producto ya existe en el carrito, o se agrega al carrito si el producto no existe.
    const wishlistAddCart = (products) => {
        let updatedCart = [...cart];
        products.forEach(product => {
            const existingProduct = updatedCart.find(item => item.id === product.id);  //Compara el id del producto en el carrito con el id del producto que estamos agregando
            if (existingProduct) {
                updatedCart = updatedCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity } //Si el id corresponde es porque existe el producto en el carrito asi que modificamos su cantidad
                        : item
                );
            } else {
                updatedCart.push({ ...product }); //Si el id no fue encontrado es porque el producto no existe en el carrito asi que lo agregamos
            }
        });

        setCart(updatedCart); //Actualizamos el estado del carrito
        emptyWishlist(); //Vaciamos la wishlist

        Toastify({
            text: "Productos agregados al carrito",
            className: "info",
            style: {
                background: "#432163",
                borderRadius: "0.5rem",
            }
        }).showToast();
    };



//Funciones para calcular la cantidad de productos agregados al carrito y a la wishlist. Se usan funciones separadas para evitar problemas. Ej: agregar productos a la wishlist y que se modifique 
//la cantidad agregada al carrito en el widget del carrito o en la pagina del carrito. Si llamo a la misma funcion en diferentes botones se cambia en ambos widget.

    const calculateQuantity = () => {
        return cart.reduce((acc, product) => acc + product.quantity, 0);
    }
    const calculateQuantityWish = () => {
        return wish.reduce((acc, product) => acc + product.quantity, 0);
    }

    const calculateTotal = () => {
        return Math.round(cart.reduce((acc, product) => acc + product.precio * product.quantity, 0)).toFixed(2);
    }

    const calculateTotalWish = () => {
        return Math.round(wish.reduce((acc, product) => acc + product.precio * product.quantity, 0)).toFixed(2);
    }

//Funcion para vaciar el carrito. Actualizamos el estado a un array vacio y mostramos el mensaje
    const emptyCart = () => {
        setCart([]);
        Toastify({
            text: "Has vaciado el carrito",
            className: "info",
            style: {
                background: "#003148",
                borderRadius: "0.5rem",
            }
        }).showToast();
    }
//Misma funcion que emptyCart pero para wishlist
    const emptyWishlist = () => {
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


//Funcion para eliminar un producto del carrito, comparando los id del carrito con el id del producto
    const deleteProduct = (product) => {
        setCart(cart.filter(prod => prod.id !== product.id));
        Toastify({
            text: "Has eliminado un producto",
            className: "info",
            style: {
                background: "#003148",
                borderRadius: "0.5rem",
            }
        }).showToast();
    }
//Misma funcion para eliminar un producto de la wishlist
    const deleteWish = (product) => {
        setWishlist(wish.filter(prod => prod.id !== product.id));
        Toastify({
            text: "Has eliminado un deseo",
            className: "info",
            style: {
                background: "#432163",
                borderRadius: "0.5rem",
            }
        }).showToast();
    }


//Funcion que modifica la cantidad de un producto en el carrito, en este caso suma 1 a la cantidad cada vez que se llama a la funcion
    function sumQuantity(product) {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };
//Funcion que modifica la cantidad de un producto en el carrito, en este caso resta 1 a la cantidad cada vez que se llama a la funcion
    function subtractQuantity(product) {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                    : item
            )
        );
    };

//Funcion que modifica la cantidad de un producto en la wishlist, en este caso suma 1 a la cantidad cada vez que se llama a la funcion
    function sumWish(product) {
        setWishlist(prevWish =>
            prevWish.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };
//Funcion que modifica la cantidad de un producto en la wishlist, en este caso resta 1 a la cantidad cada vez que se llama a la funcion
    function subtractWish(product) {
        setWishlist(prevWish =>
            prevWish.map(item =>
                item.id === product.id
                    ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                    : item
            )
        );
    };

//se retornan las funciones al provider para poder utilizarlas en el resto de la aplicacion y componentes
    return (
        <CartContext.Provider value={{ cart, wish, addToCart, calculateQuantity, calculateTotal, emptyCart, deleteProduct, sumQuantity, subtractQuantity, addToWishlist, calculateQuantityWish, calculateTotalWish, sumWish, subtractWish, deleteWish, emptyWishlist, wishlistAddCart }}>
            {children}
        </CartContext.Provider>
    )
}