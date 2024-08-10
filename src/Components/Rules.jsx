import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
    <h2>How to play Dice Game</h2>
    <div className="text">
        <p>Select any Number</p>
        <p>Click on Dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice {" "}</p>
        <p>If you your guess is wrong then 2 points will be deducted</p>
    </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 600px;
margin: 0 auto ;
background-color: #FBF1FBF1;
padding: 18px;
margin-top: 30px;
margin-bottom: 30px;
border-radius: 5px;
h2{
    font-size: 20px;
}
.text{
    margin-top: 20px;
}
`