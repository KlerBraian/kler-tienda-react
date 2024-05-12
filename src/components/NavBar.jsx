import React from 'react'
import Carrito from './Carrito'

const NavBar = () => {
  return (
    <header>
        <h1>Kler Tienda</h1>
        <nav>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Nuestras Marcas</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
        </nav>    
       <Carrito/>
    </header>
    )
}

export default NavBar