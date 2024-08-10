import styled from 'styled-components'
import { Button } from '../Styled/Button';



const StartGame = ({toggle}) => {
    return (
        <div>
            <Container>
                <div>
                <img src="/public/Images/dices.png" alt="Main_img" />
                </div>
                <div className='content'>
                    <h1>Dice Game</h1>
                    <Button onClick={toggle}>Play now</Button>
                </div>
            </Container>
        </div>
    )
}

export default StartGame

const Container = styled.div`
    max-width: 1280px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    gap: 100px;
    align-items: center;

    .content{
        h1{
            font-size: 80px;
            white-space: nowrap;
        }
    }
`;

