import React from "react";

//destructure the props to just the pokemon
export default function PokemonList({ pokemon }) {
  return (
    //map through the pokemon list as p
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}
