import React from 'react'
import Carrito from './Carrito'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <h1><NavLink to="/" className="logo-link">KlerCat</NavLink></h1>
        <nav>
            <ul className='menu'>
                <li>🐱<NavLink to="/" activeClassName ="active" className="nav-link">Inicio</NavLink></li>
                <li>🐱<NavLink to = "/productos" activeClassName ="active" className="nav-link">Productos</NavLink></li>
                <li>🐱<NavLink to = "/nuestras-marcas" activeClassName ="active" className="nav-link">Nuestras marcas</NavLink></li>
                <li>🐱<NavLink to = "/contacto" activeClassName ="active" className="nav-link">Contacto</NavLink></li>
            </ul>
        </nav>    
       <Carrito/>
    </header>
    )
}

export default NavBar