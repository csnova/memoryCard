import { useState, useEffect } from "react";
import ScoreBoard from "./ScoreBoard";
import LevelBoard from "./LevelBoard";
import "../styles/Header.css";

const Header = ({ score, highScore, level }) => {
  return (
    <div className="headerBox">
      <h1 className="pageTitle">Memory Card Game</h1>
      <ScoreBoard score={score} highScore={highScore} />
      <LevelBoard level={level} />
    </div>
  );
};

export default Header;
