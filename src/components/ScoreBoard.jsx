import "../styles/ScoreBoard.css";

const ScoreBoard = ({ score, highScore }) => {
  return (
    <div className="scoreBox">
      <div className="currentScoreBox">
        <div className="currentScoreTitle">Score: </div>
        <div className="currentScore">{score}</div>
      </div>
      <div className="highScoreBox">
        <div className="highScoreTitle">High Score: </div>
        <div className="highScore">{highScore}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
