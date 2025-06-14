import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListCont = () => {

  let {categoryId} = useParams()

  let [products, setProducts] = useState([]);

  let [tittle, setTittle] = useState("Productos");
  

  useEffect(() => {

    const productsRef = collection(db, "productos");
    const q = categoryId ? query(productsRef, where("categoria.id", "==", categoryId)) : productsRef;

    const categoryRef = collection(db, "categorias");
    let catQuery = categoryId && query(categoryRef, where("id", "==", categoryId));

    getDocs(q)
      .then((res) => {
        setProducts(
          res.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
        )
      })
      
      if (catQuery) {
        getDocs(catQuery)
          .then((res) => {
            setTittle(res.docs[0].data().nombre);
          })
      } else {
        setTittle("Productos");
      }
  }, [categoryId]);
  


  return (
    <div className="item-list-container">
      <h1 className='tittle-category'>{tittle}</h1>
      <ItemList key={products.id} products={products} />
    </div>
  )
}

export default ItemListCont