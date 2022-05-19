import React from 'react'
import { BsFillBarChartLineFill } from "react-icons/bs";
import "../../styles/card.css"

function Card (){

    return(
    <div className="card">


        <div className="icon">
            <BsFillBarChartLineFill className="icono" />
        </div>
        <div className="textoWhy">
            Ayudariamos a organizarte y obtimizar tus resultados
        </div>
    </div>
)
}

export default Card;