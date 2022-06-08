import React from 'react'
import "../styles/header.css"

// import useSelector from

import { Link } from "react-router-dom";



const Header = () => {
    // const { list: users } = useSelector(state => state.users);

    // console.log(localStorage.email)
    return(
            <header>
                <div className="divMarca">
                    <Link to="/">CForm</Link>
                </div>
                <ul className="tags">
                    <li className="tagMini">
                        <Link to="/toDo">Cartas</Link>
                    </li>
                    <li className="tagMini">
                        <Link to="/crearCuenta">Crear cuenta</Link>
                    </li>
                    <li className="iniciarSesion">
                        <Link to="/iniciarSesion">Iniciar sesion</Link>
                    </li>
                </ul>
            </header>
    )
}

export default Header
