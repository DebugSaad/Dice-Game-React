import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({seterror,error,selectedNumber,setselectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6]

    const NumberSelectorHandler = (value) => {
        setselectedNumber(value);
        seterror("")
    }

    return (
        <NumberSelectorContainer>
                <p className='error'>{error}</p>
                <div className="flex">
                {
                    arrNumber.map((value, i) => (
                        <Box isSelected={value === selectedNumber} key={i} onClick={()=>{NumberSelectorHandler(value)}} >{value}</Box>
                    ))
                }
        </div>
        <p>Select Number</p>
            </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.error{
    color: red;
}
.flex{
    display: flex; 
    gap: 24px;
}
p{
    font-size: 20px;
    font-weight: 500;
}
`

const Box = styled.div`
    height: 70px;
    width: 70px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 20px;
    font-weight: 600;
    background-color: ${(props) => props.isSelected ? 'black' : 'white'};
    color: ${(props) => props.isSelected ? 'white' : 'black'};
`