import React, {useState, useEffect} from "react";
import SWCardPlanet from "./SWCardPlanet";
import'./SWList.css';


const SWListPlanet = ({ planets, filterPlanet})=> {
    const [filteredPlanet, setFilteredPlanet] = useState(planets);


    useEffect(()=>{
        setFilteredPlanet(
            planets.filter((planet)=> planet.diameter === filterPlanet || filterPlanet === 'planets')
        );
    }, [planets, filterPlanet]);

    return(
        <div className="character-list">
            {filteredPlanet.map((planet)=>(
                <SWCardPlanet key={planet.id}
                planet={planet}/>
            ))}
        </div>
    );
};

export default SWListPlanet;