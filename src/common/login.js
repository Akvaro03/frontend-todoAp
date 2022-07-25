import React, { useEffect, useState } from 'react'
import "../styles/form.css"
import fondo from '../img/layered3.svg'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username:""
    });
    const [error, setError] = useState()
    const navigate = useNavigate()
    const {login} = useAuth()

  useEffect(() => {
    console.log(error);
  }, [error]); // Solo se vuelve a ejecutar si count cambia

  const handleChange = ({name,value}) => {
    setUser({...user, [name]:value})
  }
  const buscarCuenta = async e => { 
      e.preventDefault();
      try {
        const userCredential = await login(user.email, user.password)     
        console.log(userCredential)
        navigate("/toDo")   
      } catch (error) {
        setError(error.code)
      }
  };

  return ( 
    <>
      <div className="contenedor">
          <div className="form">
              <img className="fondo" src={fondo} alt="svg botton"></img>
              <div className="divTittle">
                  <h3>Iniciar sesion</h3>
              </div>
              <div className="content">
                <form onSubmit={buscarCuenta}>
                  <div className="email">
                    <label htmlFor="email">Email Address</label>
                    <div className="sec-2">
                      <ion-icon name="mail-outline"></ion-icon>
                      <input id="email1" onChange={({target}) => handleChange(target)} type="email" name="email" placeholder="ejemplo@gmail.com"/>
                    </div>
                  </div>
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <div className="sec-2">
                      <ion-icon name="lock-closed-outline"></ion-icon>
                      <input className="pas" onChange={({target}) => handleChange(target)} type="password" name="password" placeholder="············"/>
                      <ion-icon className="show-hide" name="eye-outline"></ion-icon>
                    </div>
                  </div>
                <button className="login"> Login </button>
                </form>
              </div>
          </div>
      </div>
    </>
);
}

export default Login;