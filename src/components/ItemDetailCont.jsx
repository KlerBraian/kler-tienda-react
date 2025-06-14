import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

//Este componente realiza el llamado de los productos de la base de datos para renderizar sus detalles de manera individual usando su id que viene en el parametro de la url
//De esta manera obtenemos el producto y lo enviamos al componente itemDetail para luego renderizar sus detalles.

const ItemDetailCont = () => {

    let { itemId } = useParams();
    let [product, setProduct] = useState(undefined);
    let [loading, setLoading] = useState(true);

    useEffect(() => {

      const docRef = doc(db, "productos", itemId);
      getDoc(docRef)
        .then(res => {
          if (res.data()) {
            setProduct( { ...res.data(), id: res.id } );
          }
          setLoading(false);
        })
      
    }, [itemId]);

    if (loading) {
      return <div>Cargando...</div>
    } else if (product) {
      return <ItemDetail product={product} />
    } else {
      return <div>Producto no encontrado</div>
    }
}

export default ItemDetailCont