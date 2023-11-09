import "../styles/LevelBoard.css"

const LevelBoard = ({ level }) => {
  return (
    <div className="levelBox">
      <div className="levelTitle">Level </div>
      <div className="levelValue">{level}</div>
    </div>
  );
};

export default LevelBoard;
