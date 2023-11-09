import { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import Header from "./Header";
import images from "./Images";
import "../styles/Print.css";

const Print = () => {
  const [imagesDeck, setImagesDeck] = useState(images);
  const [shuffledDeck, setShuffledDeck] = useState(images);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(1);

  //Shuffles the deck on load and when level changes
  useEffect(() => {
    let randomDeck = [...imagesDeck];
    let currentIndex = shuffledDeck.length;
    let randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [randomDeck[currentIndex], randomDeck[randomIndex]] = [
        randomDeck[randomIndex],
        randomDeck[currentIndex],
      ];
    }
    setShuffledDeck(randomDeck);
  }, [level]);

  console.log(shuffledDeck);

  return (
    <div className="fullPage">
      <Header score={score} highScore={highScore} level={level} />
      <GameBoard imagesDeck={shuffledDeck} />
    </div>
  );
};

export default Print;
