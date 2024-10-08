import styled from 'styled-components'
const TotalScore = ({Score}) => {
    return (
        <ScoreContainer >
            <h1>{Score}</h1>
            <p>Total Score</p>
        </ScoreContainer >
    )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width: 170px;
text-align: center;
    h1{
        font-size: 85px;
        font-weight: 400;
        line-height: 85px;
    }
    p{
        font-size: 20px;
        font-weight: 300;
    }
`
