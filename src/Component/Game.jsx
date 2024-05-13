import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Game = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(2);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) * min);
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(() => randomNumber);

    if (!selectedNumber) {
      return setError("Please Select a number first!");
    }
    setError("");
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => (prev === 0 ? 0 : prev - 2));
      alert("Wrong answer! Try again");
    }
    setSelectedNumber(undefined);
  };

  const toggleRules = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={() => setScore(0)}>Reset Game </OutlineButton>
        <Button onClick={toggleRules}>
          {showRules ? "Hide" : "Show Rules"}
        </Button>
      </div>
      {showRules ? <Rules /> : undefined}
    </MainContainer>
  );
};

export default Game;

const MainContainer = styled.div`
  padding: 70px 70px 0;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
