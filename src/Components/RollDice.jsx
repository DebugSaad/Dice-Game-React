import styled from 'styled-components'
import { useState } from 'react'

const RollDice = ({CurrentDice, roleDice}) => {
    


  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`/Images/Dice/dice_${CurrentDice}.png`} alt="Dice_1" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div `
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 18px;
    }
`