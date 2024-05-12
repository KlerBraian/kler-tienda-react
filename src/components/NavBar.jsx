import React from 'react'
import Carrito from './Carrito'

const NavBar = () => {
  return (
    <header>
        <h1>Kler Tienda</h1>
        <nav>
            <ul className='menu'>
                <li><a className='nav-link' href="">Inicio</a></li>
                <li><a className='nav-link' href="">Productos</a></li>
                <li><a className='nav-link' href="">Nuestras Marcas</a></li>
                <li><a className='nav-link' href="">Contacto</a></li>
            </ul>
        </nav>    
       <Carrito/>
    </header>
    )
}

export default NavBar