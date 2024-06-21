import React from "react";
import './SWCard.css';

const SWCardPlanet = ({ planet })=>{
    return(
        <div className="character-card">
            <div className="character-info">
                <h2>{planet.name}</h2>
                <p>Periodo de rotacion: {planet.rotation_period}</p>
                <p>Diametro: {planet.diameter} km</p>
                <p>Clima: {planet.climate}</p>
                <p>Terreno: {planet.terrain}</p>
                <p>Poblacion: {planet.population}</p>
            </div>
        </div>
    );
};

export default SWCardPlanet;