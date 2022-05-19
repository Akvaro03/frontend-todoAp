import React from 'react'
import "../styles/header.css"
const Header = () => {
    return(
            <header>
                <div className="divMarca">
                    <a href='/'>CForm</a>
                </div>
                <ul className="tags">
                    <li className="tagMini">
                        <a href="/toDo">Cartas</a>
                    </li>
                    <li className="tagMini">
                        <a href="/crearCuenta">Crear cuenta</a>
                    </li>
                    <li className="iniciarSesion">
                        <a href="/iniciarSesion">Iniciar sesion</a>
                    </li>
                </ul>
            </header>
    )
}

export default Header
