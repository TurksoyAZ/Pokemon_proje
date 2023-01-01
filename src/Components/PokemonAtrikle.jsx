import React from "react";
import "./PokemonArtikle.css";

function PokemonAtrikle({ id, name, image, type }) {
    return (
        <div className="articleBoxs">
            <span>#0{id}</span>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>Type:{type}</p>
        </div>
    );
}

export default PokemonAtrikle;
