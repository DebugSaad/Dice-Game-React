import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlinedButton } from '../Styled/Button'
import Rules from './Rules'

function Gameplay() {
  const [selectedNumber, setselectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(2);
  const [Score, setScore] = useState(0);
  const [error, seterror] = useState("");
  const [showrules, setshowrules] = useState(false);


  const RandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const roleDice = () => {
  if(!selectedNumber){
     seterror("You have not selected any number"); 
    return
  };
  seterror("");
  const randomNumber = RandomNumber(1,7);
  setCurrentDice ((prev) => randomNumber);
  
  if(selectedNumber === randomNumber){
    setScore((prev) => prev + randomNumber);
  }
  else{
    setScore((prev) => prev - 2);
  }
  setselectedNumber(undefined);
}

const resetScore = () => {
  setScore(0);
}

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore Score={Score}/>
        <NumberSelector seterror={seterror} error={error} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber}/>
      </div>
      <RollDice CurrentDice={CurrentDice} roleDice={roleDice}/>
      <div className="btns">
        <OutlinedButton onClick={resetScore}>Reset Score</OutlinedButton>
        <Button onClick={() => setshowrules((prev) => ! prev)}>{showrules ? "Hide " : "Show " }Rules</Button>
      </div>
        {showrules && <Rules/>}
    </MainContainer>
  )
}

export default Gameplay

const MainContainer = styled.main `
padding-top: 30px;

  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;

  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`