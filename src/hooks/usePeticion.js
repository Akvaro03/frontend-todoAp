import axios from 'axios';
import Swal from 'sweetalert2'

export const usePeticion = () => {
    const iniciar = (username, password, email, localStorage) => {
        localStorage.setItem("email", email);
        console.log(localStorage)
        axios.post('http://localhost:4000/api/buscar', {
                email: email,
                password: password
            })
                .then((response) =>  {
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
                        })
                        window.location.href = "/toDo";

                        break;
                    
                        default:
                        break;
                    }
                })    
        }

    const crear = (username, password, email) => {
        axios.post('http://localhost:4000/api/guardar', {
            username: username,
            password: password,
            email: email
        })
            .then((response) => {
                switch (response.data) {
                    case "emailE":
                        Swal.fire({
                            title: "Email en uso",
                            icon: "error",
                            confirmButtonText: "Cool",
                        });
                        break;
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
            window.location.href = "/toDo";
        }

    return [iniciar,crear ]
}

