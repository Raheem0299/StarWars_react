import React, { useState, useEffect } from "react";
import SWListCharacter from "./components/SWListCharacter";
import SWListStarship from "./components/SWListStarship";
import SWListPlanet from "./components/SWListPlanet";
import sound from "./media/starWarsAudio.mp3";

import './App.css';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('people');

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://swapi.dev/api/people/');

      const data = await response.json();
      const characterData = await Promise.all(
        data.results.map(async (character) => {
          const characterDetails = await fetch(character.url).then((res) => res.json());
          return {
            name: characterDetails.name,
            height: characterDetails.height,
            mass: characterDetails.mass,
            birth_year: characterDetails.birth_year,
            gender: characterDetails.gender,
          };
        })
      );
      setCharacters(characterData);
    };
    fetchCharacters();
  }, []);


  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const response = await fetch('https://swapi.dev/api/starships/');

      const data = await response.json();
      const starshipData = await Promise.all(
        data.results.map(async (starship) => {
          const starshipDetails = await fetch(starship.url).then((res) => res.json());
          return {
            name: starshipDetails.name,
            manufacturer: starshipDetails.manufacturer,
            crew: starshipDetails.crew,
            passengers: starshipDetails.passengers,
            consumables: starshipDetails.consumables,
            hyperdrive_rating: starshipDetails.hyperdrive_rating,
          };
        })
      );
      setStarships(starshipData);
    };
    fetchStarships();
  }, []);


  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets/');

      const data = await response.json();
      const planetData = await Promise.all(
        data.results.map(async (planet) => {
          const planetDetails = await fetch(planet.url).then((res) => res.json());
          return {
            name: planetDetails.name,
            rotation_period: planetDetails.rotation_period,
            diameter: planetDetails.diameter,
            climate: planetDetails.climate,
            terrain: planetDetails.terrain,
            population: planetDetails.population,
          };
        })
      );
      setPlanets(planetData);
    };
    fetchPlanets();
  }, []);


  const [value, setValue] = useState(0);
  useEffect(()=> {
    play()
  }, [value]);
  function play() {
    new Audio(sound).play()
  }




  return (
    <div className="App">
      <h1 className="glow"><hr></hr>Star <br></br>Wars<hr></hr></h1>

      <div className="filter-button">
        <button onClick={() => setFilter('people')}>Personajes</button>
        <button onClick={() => setFilter('starships')}>Naves Espaciales</button>
        <button onClick={() => setFilter('planets')}>Planetas</button>
      </div>
      <SWListCharacter characters={characters} filterCharacter={filter} />
      <SWListStarship starships={starships} filterStarship={filter} />
      <SWListPlanet planets={planets} filterPlanet={filter} />

      <button hidden onLoadedData={()=>setValue(value+1)}></button>


    </div>
  );


}

export default App;