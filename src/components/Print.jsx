import { useState } from "react";
import GameBoard from "./GameBoard";
import Header from "./Header";
import images from "./Images";
import "../styles/Print.css";

const Print = () => {
  const [imagesDeck, setImagesDeck] = useState(images);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <div className="fullPage">
      <Header score={score} highScore={highScore} level={level} />
      <GameBoard imagesDeck={imagesDeck} />
    </div>
  );
};

export default Print;
