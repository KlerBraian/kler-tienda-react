import React from 'react';
import Carrito from './Carrito';
import { NavLink } from 'react-router-dom';
import categories from '../data/categorias.json';

const NavBar = () => {
  return (
    <header>
        <div className='logo-container'>
        <h1><NavLink to="/" className="logo-link">KlerCat</NavLink></h1>
        <img className="logo" src="/src/img/huella.png" alt="" />
        </div>
        
        <nav>
            <ul className='menu'>
                <li className='nav-item'>
                    🐱<NavLink to="/" activeclassname ="active" className="nav-link">Inicio</NavLink>
                </li>
                {
                    categories.map((category) => {
                        return (
                        <li className="nav-item" key = {category.id}>
                            🐱<NavLink to={`/category/${category.id}`} activeclassname ="active" className="nav-link">{category.nombre}
                             </NavLink>
                        </li>
                        )
                    }) 
                }

                <li>🐱<NavLink to = "/contacto" activeclassname ="active" className="nav-link">Contacto</NavLink></li>
            </ul>
        </nav>    
       <Carrito/>
    </header>
    )
}

export default NavBar