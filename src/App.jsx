import Gameplay from './Components/Gameplay';
import StartGame from './Components/StartGame';
import { useState } from 'react';

function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {  
    setisGameStarted((prev) => !prev)
  }
  return (
    <>
    {
      isGameStarted ?  <Gameplay/> : <StartGame toggle = {toggleGamePlay} />
    }
    </>
  )
}

export default App
