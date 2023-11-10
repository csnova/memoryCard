import { useState } from "react";
import Card from "./Card";
import "../styles/GameBoard.css";

const GameBoard = ({
  imagesDeck,
  score,
  setScore,
  highScore,
  setHighScore,
  level,
  setLevel,
  pickedDeck,
  setPickedDeck,
}) => {
  return (
    <div className="gameBoard">
      {imagesDeck.map((card) => {
        return (
          <Card
            key={card.label}
            image={card.image}
            label={card.label}
            score={score}
            setScore={setScore}
            highScore={highScore}
            setHighScore={setHighScore}
            level={level}
            setLevel={setLevel}
            pickedDeck={pickedDeck}
            setPickedDeck={setPickedDeck}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
