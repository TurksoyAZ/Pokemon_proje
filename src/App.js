import { useEffect, useState } from "react";
import "./App.css";
import PokemonAtrikle from "./Components/PokemonAtrikle";

function App() {
  const [allPokemons, setallPokemons] = useState([]);
  const [loadPokemons, setLoadPokemons] = useState("https://pokeapi.co/api/v2/pokemon?limit=21");
 
  //
  const getPokemons = async () => {
    const res = await fetch(loadPokemons);
    const data = await res.json();
    
    setLoadPokemons(data.next);

    //
    const createPokeObje = (results) => {
      results.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setallPokemons((parametr) => [...parametr, data]);
        // await allPokemons
        //  console.log(data);
      });
    };

    createPokeObje(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      <div className="evalution">
        <h1>Pokemons Evalution</h1>
      </div>

      <div className="mainContainer">
        {allPokemons.map((e, i) => {
          return (
            <PokemonAtrikle
              key={i}
              id={e.id}
              name={e.name}
              image={e.sprites.other.dream_world.front_default}
              type={e.types[0].type.name}
            />
          );
        })}
      </div>

      <div className="btn">
        <button onClick={() => getPokemons()}>Load more...</button>
      </div>
    </div>
  );
}

export default App;
