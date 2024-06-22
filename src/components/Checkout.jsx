import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";


export const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now(),
            estado: "En camino"
        }
        
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <>
            <div className="checkout-container">
                <h1 className="checkout-titulo">Muchas gracias por tu compra</h1>
                <img className="img-checkout" src="./src/img/michis.jpg" alt="" />
                <p className="checkout-id">Para hacer el seguimiento de tu pedido, el identificador es:  <span className="id">{docId}</span></p>
            </div>
           
            </>
        )
    }
else if (carrito.length> 0) {
  return (
    <div>
        <form className="form-checkout" onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingrese su e-mail" {...register("email")} />
            <button type="submit">Comprar</button>
        </form>
    </div>
  )
}

return (
    <div className="compra-sin-productos">
    <p className="checkout-id">No posee productos en su carrito</p>
    <button className='confirmar-comre volver'><Link to="/" className='confirmar-compra'> Volver a la tienda</Link></button>
    </div>
   
)
}