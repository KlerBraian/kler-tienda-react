import React, { useEffect, useState } from 'react'
import data from "../data/marcas.json";
import { NuestrasMarcasList } from './NuestrasMarcasList';


const NuestrasMarcasCont = () => {
  let [marcas, setProductos] = useState([]);
  
  const pedirMarcas = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {
    
    pedirMarcas()
      .then((res) => {
        setProductos(res);
      })

  }, []);
  return (
    <div className="item-list-container">
      <h1>Marcas</h1>
      <NuestrasMarcasList marcas={marcas} />
    </div>
  )
}

export default NuestrasMarcasCont