import React from 'react';
import "../../styles/startUse.css"
import celular from "../../img/notebookPng.png"
import circulos from "../../img/blob3.svg"

function StartUse() {
    return ( 
        <div className="startUse">
			<div className="divTitle">
				<h3 className="title tittleUse">
					Empieza a crear notas
				</h3>
			</div>
			<div className="divTextUse">
            	<div className="textUser">
            	    <h3>Usa nuestra aplicacion ya.</h3>
					<p>Nuestra aplicacion es totalmente gratuita para todos los usarios y podras hacerte una cuenta en menos de 2 minutos.</p>
						<a className="btnUser" href="/crearCuenta">Crear una cuenta</a>
            	</div>
            	<img src={celular} alt="holaa"></img>
        	</div>
			<img src={circulos} className="circulos" alt="holaa"></img>



			

		</div>
    );
}

export default StartUse;