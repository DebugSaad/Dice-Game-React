import styled from 'styled-components'

export const Button = styled.button`

    padding: 10px 18px;
    min-width: 200px;
    height: 40px;
    margin-top: 30px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;
    &:hover{
        background-color: white;
        border: 1px solid black;
        font-size: 16px;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlinedButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
    &:hover{
        background-color: black;
        border: 1px solid transparent;
        font-size: 16px;
        color: white;
    }
`;