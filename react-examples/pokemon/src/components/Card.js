import React from "react";

function Card({ imgPath, name, ability, onClose }) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const bgColor = "#" + randomColor;
  return (
    <>
      <div className="squad-card" style={{ background: bgColor }}>
        <button className="close" onClick={onClose}>
          close
        </button>
        <figure className="pokemon-image mb-20" style={{ background: "#fff" }}>
          <img src={imgPath} alt={name} />
        </figure>
        <h3 className="fc-blue">{name}</h3>
        <p className="fs-16">{ability}</p>
      </div>
    </>
  );
}

export default Card;
