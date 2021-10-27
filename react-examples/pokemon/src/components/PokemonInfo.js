import React from "react";

function PokemonInfo({
  name,
  imgPath,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
}) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const bgColor = "#" + randomColor;
  return (
    <>
      <figure className="pokemon-image mb-20" style={{ background: bgColor }}>
        <img src={imgPath} alt={name} />
      </figure>
      <h2 className="fc-blue center mb-20">{name}</h2>
      <table width="100%" className="pokemon-stat" cellSpacing="10">
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