import React from 'react'
import "../styles/header.css"
import { useAuth } from '../context/authContext';
// import useSelector from

import { Link } from "react-router-dom";
import { useSingOut } from '../hooks/useSingOut';

const Header = () => {
    const singOut = useSingOut()


    const {user, loading, collections} = useAuth()
    
    if(user) {
        // console.log(collections)

        // collections && collections.forEach(carro => {
        //     console.log(carro)
        // })

    }
    if(!user) console.log("sesion no iniciada") 

    const HandleAcount = () => {
        if (user){
        return (
            <>
                    <li className="tagMini">
                        <Link to="/" onClick={singOut}>Cerrar Sesion</Link>
                    </li>
                    <li className="iniciarSesion">
                        <Link to="/iniciarSesion">{loading ? "" : user.email}</Link>
                    </li>
            </>
        )} else {
            return (
                <>
                        <li className="tagMini">
                            <Link to="/crearCuenta">Crear cuenta</Link>
                        </li>
                        <li className="iniciarSesion">
                            <Link to="/iniciarSesion">Iniciar sesion</Link>
                        </li>
                </>
            )
        }
}


    return(
            <header>
                <div className="divMarca">
                    <Link to="/">CForm</Link>
                </div>
                <ul className="tags">
                    <li className="tagMini">
                        <Link to="/toDo">Cartas</Link>
                    </li>
                    <HandleAcount />
                </ul>
            </header>
    )
}

export default Header
