import { useState } from "react";

export default function DiceRoller() {
  const diceSides = [1, 2, 3, 4, 5, 6];
  const [winningSideOne, setWinningSideOne] = useState(1);
  const [winningSideTwo, setWinningSideTwo] = useState(1);
  const [winningSideThree, setWinningSideThree] = useState(1);
  const [isDataOne, setIsDataOne] = useState(false);
  const [isDataTwo, setIsDataTwo] = useState(false);
  const [isDataThree, setIsDataThree] = useState(false);

  const diceRollOne = () => {
    let sideUp = diceSides[Math.floor(Math.random() * diceSides.length)];
    setWinningSideOne(sideUp);
    return sideUp;
  };
  const diceRollTwo = () => {
    let sideUp = diceSides[Math.floor(Math.random() * diceSides.length)];
    setWinningSideTwo(sideUp);
    return sideUp;
  };
  const diceRollThree = () => {
    let sideUp = diceSides[Math.floor(Math.random() * diceSides.length)];
    setWinningSideThree(sideUp);
    return sideUp;
  };

  const handleClickOne = () => {
    setIsDataOne(true);
    diceRollOne.apply();
  };
  const handleClickTwo = () => {
    setIsDataTwo(true);
    diceRollTwo.apply();
  };
  const handleClickThree = () => {
    setIsDataThree(true);
    diceRollThree.apply();
  };
  return (
    <div className="dice-widget-wrapper">
      <h1>Hello from Dice</h1>

      <div className="dice-body">
        <div className="red">
          <button onClick={handleClickOne}>Press Me to Roll</button>
          {isDataOne ? (
            <div className="displayed-side">{winningSideOne}</div>
          ) : null}
        </div>
        <div className="green">
          <button onClick={handleClickTwo}>Press Me to Roll</button>
          {isDataTwo ? (
            <div className="displayed-side">{winningSideTwo}</div>
          ) : null}
        </div>
        <div className="blue">
          <button onClick={handleClickThree}>Press Me to Roll</button>
          {isDataThree ? (
            <div className="displayed-side">{winningSideThree}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
