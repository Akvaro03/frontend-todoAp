import React from 'react'
import "../../styles/crearCuenta.css"

import {Form, Header} from '../../common';

function CrearCuenta() {
    return ( 
        <div className="crearCuenta">
            <Header />
            <Form modo="crear" />
        </div>
    );
}

export default CrearCuenta;