import React from "react";
let colors = Math.floor(Math.random() * (3 - 0 + 1) + 0);
let colorsName = ["#d72631", "#a2d5c6", "#077b8a", "#5c3c92"];
let color = colorsName[colors];

function PokemonInfo({
  name,
  imgPath,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  bgColor,
}) {
  return (
    <>
      <figure className="pokemon-image mb-20" style={{ background: color }}>
        <img src={imgPath} alt={name} />
      </figure>
      <h2 className="fc-blue center mb-20">{name}</h2>
      <table width="100%" className="pokemon-stat">
        <tbody>
          <tr>
            <td>{hp} HP</td>
            <td>{attack} Attack</td>
            <td>{defense} Defence</td>
          </tr>
          <tr>
            <td>{specialAttack} Special Attack</td>
            <td>{specialDefense} Special Defence</td>
            <td>{speed} Speed</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default PokemonInfo;
