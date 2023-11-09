import { useState } from "react";
import Card from "./Card";

const GameBoard = (imagesDeck) => {
  return (
    <div>
      {imagesDeck.imagesDeck.map((card) => {
        return <Card key={card.label} image={card.image} label={card.label} />;
      })}
    </div>
  );
};

export default GameBoard;
