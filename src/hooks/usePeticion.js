import {  useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export const usePeticion = () => {
    const [modo , setModo] = useState("iniciar")

    const search = (username, password) => {
        console.log("se esta buscandooo")
        if (modo === "crear") {
            axios.post('http://localhost:4000/api/guardar', {
                username: username,
                password: password
            })
                .then((response) => {
                    switch (response.data) {
                        case "usernameE":
                        Swal.fire({
                            title: "Nombre en uso",
                            icon: "error",
                            confirmButtonText: "Cool",
                        });
                        break;
                    
                        case "passwordE":
                            Swal.fire({
                                title: "Contraseña en uso",
                                icon: "error",
                                confirmButtonText: "Cool",
                        });
                        ;
                            break;
                    
                            case "ok":
                            Swal.fire({
                                title: "Cuenta creada",
                                icon: "success",
                                confirmButtonText: "Cool",
                            });
                            ;
                            break;
                        
                        default:
                        break;
                    }
                
                })    
        } else if ( modo ==="iniciar" ){
            axios.post('http://localhost:4000/api/buscar', {
                username: username,
                password: password
            })
                .then((response) =>  {
                    console.log(response.data)
                    switch (response.data) {
                        case "usernameNoE":
                            Swal.fire({
                                title: "Correo no encontrado",
                                icon: "error",
                                confirmButtonText: "Cool",
                        });
                        break;
                    
                        case "passwordNoE":
                            Swal.fire({
                            title: "Contraseña no encontrado",
                            icon: "error",
                            confirmButtonText: "Cool",
                        });
                        ;
                        break;
                    
                        case "cuentaEncontrada":
                            Swal.fire({
                            title: "Sesion iniciada",
                            icon: "success",
                            confirmButtonText: "Cool",
                        });
                        ;
                        break;
                    
                        default:
                        break;
                    }
                
                })    
        }
    }
    const configurarModo = (modoNuevo) => {
        setModo(modoNuevo)
    }

    return [search, configurarModo]
}

