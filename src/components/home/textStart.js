import React from 'react'
// import SvgComponent from '../img/notebook.js'
import "../../styles/textStart.css"
import notebook from "../../img/notebook3.png"


export default function TextStart () {
    return(
        <div className="divText">
            <div className="text">
                <h3>Unete a esta fantastica aplicacion para guardar todas las actividades que quieras guardar.</h3>
            </div>
            <img src={notebook} alt="holaa"></img>
        </div>
    )
}