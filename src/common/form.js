import React, { useState } from 'react'
import "../styles/form.css"
import fondo from '../img/layered3.svg'
import { usePeticion } from '../hooks/usePeticion';

function Email(props) {
  const modo = props.modo
  const setUsername = props.set
  if (modo === "crear") {
    return (
      <div className="email">
      <label htmlFor="email">Username</label>
      <div className="sec-2">
        <ion-icon name="mail-outline"></ion-icon>
        <input id="username2" onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="your name"/>
      </div>
    </div>

    );
  }
}

function Form(props) {
  const modo = props.modo
  const [iniciar, crear] = usePeticion();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let tittle;
  let buttonName;
  const buscarCuenta = (e) => { 
      e.preventDefault();
      localStorage.clear()
      console.log(localStorage)
      // configurarModo(modo)
      //   .then(search(username, password))
      modo === "iniciar" ? iniciar(username, password, email, localStorage) : modo === "crear" ? crear(username, password, email) : console.log("error")
  };

  if (modo === "crear") {
    tittle = "Crear nueva cuenta";
    buttonName = "Create";
  } else if (modo === "iniciar") {
    tittle = "Iniciar sesion";
    buttonName = "Login";
  }
  
  return ( 
    <>
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
                      <input id="email1" onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="ejemplo@gmail.com"/>
                    </div>
                  </div>
                  
                  <Email modo={modo} set={ setUsername }/>

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
    </>
);
}

export default Form;