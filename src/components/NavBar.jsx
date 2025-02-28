
import { CartWidget } from './CartWidget';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link, NavLink } from 'react-router-dom';
import WishlistWidget from "./WishlistWidget"

const NavBar = () => {

  let [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriasRef = collection(db, "categorias");
    getDocs(categoriasRef)
      .then((res) => {
        setCategories(res.docs.map((doc) => {
          return { ...doc.data() }
        }));
      })
  }, [])

  return (
    <header className='header'>
      <div className='logo-container'>
        <h1><NavLink to="/" className="logo-link">KlerCat</NavLink></h1>
        <img className="logo" src="/image/huella.png" alt="" />
      </div>

      <nav>
        <ul className='menu'>
          <li className='nav-item'>
            🐱<NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink>
          </li>
          {
            categories.map((category) => {
              return (
                <li className="nav-item" key={category.id}>
                  🐱<NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link">{category.nombre}
                  </NavLink>
                </li>
              )

            })

          }
          <li className='nav-item'>🐱<NavLink to="/buscar-pedido" activeclassname="active" className="nav-link">Segui tu pedido</NavLink></li>
          <li className='nav-item'>🐱<NavLink to="/contacto" activeclassname="active" className="nav-link">Contacto</NavLink></li>
          <CartWidget />
          <WishlistWidget />
        </ul>
      </nav>
    </header>
  )
}

export default NavBar