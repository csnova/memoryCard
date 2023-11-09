import { useState } from "react";
import GameBoard from "./GameBoard";
import images from "./Images";

const Print = () => {
  const [imagesDeck, setImagesDeck] = useState(images);

  return <GameBoard imagesDeck={imagesDeck} />;
};

export default Print;
