import React, { useState } from 'react'
import "../styles/form.css"
import fondo from '../img/layered3.svg'
import { usePeticion } from '../hooks/usePeticion';

function Form(props) {
  const modo = props.modo
  const [search, configurarModo] = usePeticion();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let tittle;
  let buttonName;
  const buscarCuenta = (e) => {
      e.preventDefault();
      configurarModo(modo)
        .then(search(username, password))
  };

  if (modo === "crear") {
    tittle = "Crear nueva cuenta";
    buttonName = "Create";
  } else if (modo === "iniciar") {
    tittle = "Iniciar sesion";
    buttonName = "Login";
  }
  
  return ( 
      <div className="contenedor">
          <div className="form">
              <img className="fondo" src={fondo} alt="svg botton"></img>
              <div className="divTittle">
                  <h3>{ tittle }</h3>
              </div>
              <div className="content">
                <form onSubmit={buscarCuenta}>
                  <div className="email">
                    <label htmlFor="email">Email Address</label>
                    <div className="sec-2">
                      <ion-icon name="mail-outline"></ion-icon>
                      <input id="email" onChange={(e) => setUsername(e.target.value)} type="email" name="email" placeholder="ejemplo@gmail.com"/>
                    </div>
                  </div>
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <div className="sec-2">
                      <ion-icon name="lock-closed-outline"></ion-icon>
                      <input className="pas" onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="············"/>
                      <ion-icon className="show-hide" name="eye-outline"></ion-icon>
                    </div>
                  </div>
                <button className="login">{buttonName} </button>
                </form>
              </div>
          </div>
      </div>
);
}

export default Form;