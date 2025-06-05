import SelectPlayerScreen from '../components/select_player_screen/PlayerScreen'
import GameScreen from '../components/game_screen/GameScreen'
import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import './App.css'

function App() {
    

    {/* state to store the player number, passed down to game screen*/}
    const [playerNumber, setPlayerNumber] = useState(0)

    {/* function to lock in the player number, passed down to select player screen*/}
    const changePlayerNumber = (n) => {
      setPlayerNumber(n)
      console.log(playerNumber)
    }

  return (
    <>
      <div className="font-inter">
        <AnimatePresence>
        {playerNumber < 1 && <SelectPlayerScreen changePlayerNumber={changePlayerNumber}></SelectPlayerScreen>}
        </AnimatePresence>
        {playerNumber > 0 && <GameScreen playerNumber={playerNumber} />}
      </div>

    </>
  )
}

export default App
