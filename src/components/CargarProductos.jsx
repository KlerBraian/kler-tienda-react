import React, { useEffect } from 'react'
import data from "../data/main.json"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const CargarProductos = () => {

        useEffect(() => {
            const cargarProductos = async () => {
                const productosRef = collection(db, "productos");
                for (const prod of data) {
                    await addDoc(productosRef, prod);
                }
            };
    
            cargarProductos();
        }, []); // Asegúrate de que el segundo argumento de useEffect sea un array vacío
    
        return (
            <div>CargarProductos</div>
        );

}