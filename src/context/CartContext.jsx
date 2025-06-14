import { createContext, useEffect, useState } from "react";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])



    const [wish, setWishlist] = useState(() => {
        const savedWish = localStorage.getItem("wishlist");
        return savedWish ? JSON.parse(savedWish) : [];
    });


    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wish))
    }, [wish])


    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
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


    const wishlistAddCart = (products) => {
        let updatedCart = [...cart];
        products.forEach(product => {
            const existingProduct = updatedCart.find(item => item.id === product.id);
            if (existingProduct) {
                updatedCart = updatedCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                updatedCart.push({ ...product });
            }
        });

        setCart(updatedCart);
        emptyWishlist();

        Toastify({
            text: "Productos agregados al carrito",
            className: "info",
            style: {
                background: "#432163",
                borderRadius: "0.5rem",
            }
        }).showToast();
    };




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



    const deleteProduct = (product) => {
        const foundProduct = cart.find(prod => prod.id === product.id);
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

    const deleteWish = (product) => {
        const foundProduct = wish.find(prod => prod.id === product.id);
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



    function sumQuantity(product) {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    function subtractQuantity(product) {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                    : item
            )
        );
    };


    function sumWish(product) {
        setWishlist(prevWish =>
            prevWish.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    function subtractWish(product) {
        setWishlist(prevWish =>
            prevWish.map(item =>
                item.id === product.id
                    ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                    : item
            )
        );
    };


    return (
        <CartContext.Provider value={{ cart, wish, addToCart, calculateQuantity, calculateTotal, emptyCart, deleteProduct, sumQuantity, subtractQuantity, addToWishlist, calculateQuantityWish, calculateTotalWish, sumWish, subtractWish, deleteWish, emptyWishlist, wishlistAddCart }}>
            {children}
        </CartContext.Provider>
    )
}