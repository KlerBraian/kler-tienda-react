
import { CartWidget } from './CartWidget';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link, NavLink } from 'react-router-dom';
import WishlistWidget from "./WishlistWidget"

//Componente de navegacion para conectar las rutas a los distintos links de la pagina. Tambien contiene el llamado a la funcionalidad de mostrar/ocultar el nav en renderizacion mobile
//Los titulos de los links de categorias son llamados de la base de datos.

const NavBar = () => {

  let [categories, setCategories] = useState([]);
  let [visibleNav, setVisibleNav] = useState("");

  useEffect(() => {
    const categoryRef = collection(db, "categorias");
    getDocs(categoryRef)
      .then((res) => {
        setCategories(res.docs.map((doc) => {
          return { ...doc.data() }
        }));
      })
  }, [])

  return (
    <header className={`header ${visibleNav}`}>
      <div className='logo-container'>
        <h1><NavLink to="/" className="logo-link">KlerCat</NavLink></h1>
        <img className="logo" src="/image/huella.png" alt="" />
      </div>
      <button className={`open-menu${visibleNav}`} onClick={()=> setVisibleNav("Visible")}><i class="bi bi-list"></i></button>
      <nav className={`nav${visibleNav} `}>
        <button className='close-menu'onClick={()=> setVisibleNav("")}><i class="bi bi-x-circle"></i></button>
        <ul className='menu'>
          <li className='nav-item' >
            🐱<NavLink to="/" activeclassname="active" className="nav-link" onClick={()=> setVisibleNav("")}>Inicio</NavLink>
          </li>
          {
            categories.map((category) => {
              return (
                <li className="nav-item" key={category.id}>
                  🐱<NavLink to={`/category/${category.id}`} onClick={()=> setVisibleNav("")} activeclassname="active" className="nav-link">{category.nombre} 
                  </NavLink>
                </li>
              )

            })

          }
          <li className='nav-item'>🐱<NavLink to="/buscar-pedido" activeclassname="active" className="nav-link" onClick={()=> setVisibleNav("")}>Segui tu pedido</NavLink></li>
          <li className='nav-item'>🐱<NavLink to="/contacto" activeclassname="active" className="nav-link" onClick={()=> setVisibleNav("")}>Contacto</NavLink></li>
          <CartWidget/>
          <WishlistWidget />
        </ul>
      </nav>
    </header>
  )
}

export default NavBar