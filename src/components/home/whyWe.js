import React from 'react';
import Card from './card';
import waves from "../../img/layered.svg"
import "../../styles/whyMe.css";

export default function WhyMe () {
    return (
        <div className="divWhy">
            <div className="divContainer">
                <div className="divTitle">
                    <h3 className="title">Por que nosotros?</h3>
                </div>
                <div className="divBeneficios">
                        <Card />
                        <Card />
                        <Card />
                </div>
            </div>
            <img src={waves} className="wavesLeft" alt='waves boton'></img>
        </div>
    )
}

