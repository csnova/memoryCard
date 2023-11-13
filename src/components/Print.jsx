import { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import Header from "./Header";
import images from "./Images";
import Modal from "./modal";
import "../styles/Print.css";

const Print = () => {
  const imagesDeck = images;
  const [shuffledDeck, setShuffledDeck] = useState(images);
  const [currentDeck, setCurrentDeck] = useState(images);
  const [pickedDeck, setPickedDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [modalText, setModalText] = useState(
    "For each level, Don't click the same image twice!"
  );

  //Shuffles the deck on load and when level changes
  useEffect(() => {
    let randomDeck = [...imagesDeck];
    let currentIndex = randomDeck.length;
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

  //Draw the right number of cards when deck is shuffled
  useEffect(() => {
    let levelDeck = [];
    for (let i = 0; i < level * 6; i++) {
      levelDeck = [...levelDeck, shuffledDeck[i]];
    }
    setCurrentDeck(levelDeck);
  }, [shuffledDeck]);

  //Shuffle Deck when correct answer is picked
  useEffect(() => {
    let randomDeck = [...currentDeck];
    let currentIndex = randomDeck.length;
    let randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [randomDeck[currentIndex], randomDeck[randomIndex]] = [
        randomDeck[randomIndex],
        randomDeck[currentIndex],
      ];
    }
    setCurrentDeck(randomDeck);
  }, [pickedDeck]);

  return (
    <div className="fullPage">
      <Header score={score} highScore={highScore} level={level} />
      <Modal modalText={modalText} />
      <GameBoard
        imagesDeck={currentDeck}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        level={level}
        setLevel={setLevel}
        pickedDeck={pickedDeck}
        setPickedDeck={setPickedDeck}
        setModalText={setModalText}
      />
    </div>
  );
};

export default Print;
