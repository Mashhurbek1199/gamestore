import React from "react";
import "./GameImage.css";
const GameImage = ({image}) => {
  return (
    <div className="game-img" style={{backgroundImage: `url(${image})`}}></div>
  );
};

export default GameImage;
