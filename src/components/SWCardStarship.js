import React from "react";
import './SWCard.css';

const SWCardStarship = ({ starship })=>{
    return(
        <div className="character-card">
            <div className="character-info">
                <h2>{starship.name}</h2>
                <p>Fabricante: {starship.manufacturer}</p>
                <p>Tripulacion: {starship.crew} kg</p>
                <p>Pasajeros: {starship.passengers}</p>
                <p>Consumibles: {starship.consumables}</p>
                <p>Calificación de hiperimpulsor: {starship.hyperdrive_rating}</p>
            </div>
        </div>
    );
};

export default SWCardStarship;