import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";


export const Checkout = () => {

    const { cart, calculateTotal, emptyCart } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const purchase = (data) => {
        const order = {
            client: data,
            products: cart,
            total: calculateTotal(),
            date: Timestamp.now(),
            status: "En camino"
        }
        
        const orderRef = collection(db, "pedidos");

        addDoc(orderRef, order)
            .then((doc) => {
                setDocId(doc.id);
                emptyCart();
            })
    }

    if (docId) {
        return (
            <>
            <div className="checkout-container">
                <h1 className="checkout-titulo">Muchas gracias por tu compra</h1>
                <img className="img-checkout" src="/image/michis.jpg" alt="" />
                <p className="checkout-id">Para hacer el seguimiento de tu pedido, el identificador es:  <span className="id">{docId}</span></p>
            </div>
           
            </>
        )
    }
else if (cart.length> 0) {
  return (
    <div>
        <form className="form-checkout" onSubmit={handleSubmit(purchase)}>
            <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingrese su e-mail" {...register("email")} />
            <button type="submit">Comprar</button>
        </form>
    </div>
  )
}

return (
    <div className="empty-purchase">
    <p className="checkout-id">No posee productos en su carrito</p>
    <button className='purchase return'><Link to="/" className='purchase'> Volver a la tienda</Link></button>
    </div>
   
)
}