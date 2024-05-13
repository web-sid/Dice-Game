import Game from "./Component/Game";
import StartGame from "./Component/StartGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <Game /> : <StartGame toggle={toggleGameplay} />}</>
  );
}

export default App;
