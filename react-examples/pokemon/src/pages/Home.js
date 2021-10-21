import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonInfo from "../components/PokemonInfo";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    axios.get(url).then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

  function fetchPokemon(event, pokemon) {
    axios.get(pokemon.url).then((response) => {
      setPokemonInfo(response.data);
      setActive(true);
    });
  }
  console.log(pokemonInfo);

  return (
    <>
      <div className="container">
        <h1 className="fc-blue center">Select Pokemon</h1>
        <div className="pokemon-wrapper">
          <input
            type="text"
            name="search"
            placeholder="Search Pokemon"
            className="search-pokemon"
          />
          <ul className="pokemon-list">
            {pokemons.map((pokemon, index) => (
              <li key={index}>
                <button onClick={(event) => fetchPokemon(event, pokemon)}>
                  {pokemon.name}
                </button>
              </li>
            ))}
          </ul>
          {active && (
            <div className="about-pokemon">
              <PokemonInfo
                imgPath={pokemonInfo.sprites.front_default}
                name={pokemonInfo.species.name}
                hp={pokemonInfo.stats[0].base_stat}
                attack={pokemonInfo.stats[1].base_stat}
                defense={pokemonInfo.stats[2].base_stat}
                specialAttack={pokemonInfo.stats[3].base_stat}
                specialDefense={pokemonInfo.stats[4].base_stat}
                speed={pokemonInfo.stats[5].base_stat}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Home;
