import axios from 'axios';

export function useCookie () {
    const mostrarCookies = (email= "nada") => {
        console.log(email)
        axios.post('http://localhost:4000/api/buscarCookie', {
                email: email
            })
        .then(({data}) => {
            if (data === "no") {
                window.location.href = "/";
            } else{
                console.log(data)
            }
        })
    }

    return [mostrarCookies ]
}
