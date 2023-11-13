import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Card.css";
import { faIls } from "@fortawesome/free-solid-svg-icons";

const Card = ({
  image,
  label,
  score,
  setScore,
  highScore,
  setHighScore,
  level,
  setLevel,
  pickedDeck,
  setPickedDeck,
  setModalText,
}) => {
  const modal = document.getElementById("myModal");

  function onCardClick(e) {
    if (pickedDeck.includes(label)) {
      if (score > highScore) {
        setHighScore(score);
      }
      modal.style.display = "block";
      setModalText("Try Again! Level 1");
      setScore(0);
      setPickedDeck([]);
      setLevel(1);
    } else {
      setPickedDeck([...pickedDeck, label]);
      setScore(score + 1);
    }
    if (pickedDeck.length >= 23) {
      modal.style.display = "block";
      setModalText("Winner!");
    } else if (pickedDeck.length >= level * 6 - 1) {
      modal.style.display = "block";
      setModalText(`Next Level! Level ${level + 1}`);
      setPickedDeck([]);
      setLevel(level + 1);
    }
    console.log(pickedDeck);
  }

  return (
    <div value={label} onClick={onCardClick} className="card">
      <div className="image">
        <FontAwesomeIcon icon={image} size="4x" color="pink" />
      </div>
      <div className="imageLabel">
        <div className="imageLabelText">{label}</div>
      </div>
    </div>
  );
};
export default Card;
