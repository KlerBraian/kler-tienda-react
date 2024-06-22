import React, { useEffect, useState } from 'react';
import data from "../data/main.json";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const CargarProductos = () => {
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//         const cargarProductos = async () => {
//             if (!isLoaded) {
//                 const productosRef = collection(db, "productos");
//                 const querySnapshot = await getDocs(productosRef);

//                 if (querySnapshot.empty) {
//                     for (const prod of data) {
//                         await addDoc(productosRef, prod);
//                     }
//                     setIsLoaded(true); // Marcar como cargado
//                 } else {
//                     console.log("Los productos ya están cargados en la base de datos.");
//                     setIsLoaded(true); // Marcar como cargado incluso si ya existen
//                 }
//             }
//         };
    
//         cargarProductos();
//     }, [isLoaded]); // Dependencia en isLoaded

    return (
        <div>CargarProductos</div>
    );
}
