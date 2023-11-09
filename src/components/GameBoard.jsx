import { useState } from "react";
import Card from "./Card";
import "../styles/GameBoard.css";

const GameBoard = (imagesDeck) => {
  return (
    <div className="gameBoard">
      {imagesDeck.imagesDeck.map((card) => {
        return <Card key={card.label} image={card.image} label={card.label} />;
      })}
    </div>
  );
};

export default GameBoard;
