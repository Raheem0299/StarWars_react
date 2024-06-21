import React from "react";
import './SWCard.css';

const SWCardCharacter = ({ character })=>{
    return(
        <div className="character-card">
            <div className="character-info">
                <h2>{character.name}</h2>
                <p>Altura: {character.height}</p>
                <p>Peso: {character.mass} kg</p>
                <p>Año de Nacimiento: {character.birth_year}</p>
                <p>Genero: {character.gender}</p>
            </div>
        </div>
    );
};


export default SWCardCharacter;
