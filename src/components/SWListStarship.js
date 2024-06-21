import React, {useState, useEffect} from "react";
import SWCardStarship from "./SWCardStarship";
import'./SWList.css';



const SWListStarship = ({ starships, filterStarship})=> {
    const [filteredStarship, setFilteredStarship] = useState(starships);


    useEffect(()=>{
        setFilteredStarship(
            starships.filter((starship)=> starship.model === filterStarship || filterStarship === 'starships')
        );
    }, [starships, filterStarship]);

    return(
        <div className="character-list">
            {filteredStarship.map((starship)=>(
                <SWCardStarship key={starship.id}
                starship={starship}/>
            ))}
        </div>
    );
};

export default SWListStarship;