import React, {useState, useEffect} from "react";
import SWCardCharacter from "./SWCardCharacter";
import'./SWList.css';


const SWListCharacter = ({ characters, filterCharacter})=> {
    const [filteredCharacter, setFilteredCharacter] = useState(characters);


    useEffect(()=>{
        setFilteredCharacter(
            characters.filter((character)=> character.gender === filterCharacter || filterCharacter === 'people')
        );
    }, [characters, filterCharacter]);

    return(
        <div className="character-list">
            {filteredCharacter.map((character)=>(
                <SWCardCharacter key={character.id}
                character={character}/>
            ))}
        </div>
    );
};

export default SWListCharacter;