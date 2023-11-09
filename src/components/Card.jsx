import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ image, label }) => {
  return (
    <div value={label} className="card">
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
