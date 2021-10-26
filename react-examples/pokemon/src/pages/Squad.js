import React, { useState } from "react";

function Squad({ data, onClose }) {
  const [squad, setSquad] = useState(data);
  function onClose(event, unique, index, modifiedData) {
    console.log(index);
    console.log(data[index]);
    modifiedData = data.splice(index, 1);
    console.log(modifiedData);
  }
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const bgColor = "#" + randomColor;
  return (
    <div className="squad-container">
      <h3 className="fc-blue center mb-20">Selected Squad</h3>
      <ul className="cards-container">
        {data.map((unique, index) => (
          <li key={index}>
            <div className="squad-card" style={{ background: bgColor }}>
              <button
                className="close"
                onClick={(event) => onClose(event, unique, index)}
              >
                close
              </button>
              <figure
                className="pokemon-image mb-20"
                style={{ background: "#fff" }}
              >
                <img
                  src={unique.sprites.front_default}
                  alt={unique.species.name.toUpperCase()}
                />
              </figure>
              <h3 className="fc-blue">{unique.species.name.toUpperCase()}</h3>
              <p className="fs-16">{unique.abilities[0].ability.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Squad;
