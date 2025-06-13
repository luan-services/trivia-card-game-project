import React, { useEffect } from 'react'
import { useState } from 'react'
import PlayerNavBar from './players_nav_bar/PlayerNavBar';
import { motion } from "motion/react"
import GameBoard from './game_board/GameBoard';

const GameScreen = ({playerNumber}) => {
    console.log(playerNumber)

    {/* state to make the players divs */}
    const [values, setValues] = useState(Array(1).fill(0));

    {/* effect to update the player div quantity based on playerNumber value*/}
    useEffect(() => {
      setValues(Array(playerNumber).fill(0))

    }, [playerNumber])

    {/* function to increase points inside each player div */}
    const increaseValues = (n) => {
      const newValues = [...values]
      if (newValues[n] < 99) { 
        newValues[n] = newValues[n] + 1
        setValues(newValues)
      }
    }

    {/* function to increase points inside each player div */}
    const decreaseValues = (n) => {
      const newValues = [...values]
      if (newValues[n] > 0) { 
        newValues[n] = newValues[n] - 1
        setValues(newValues)
      }
      
    }

    

  return (
    /* div to make components fade in and out */
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>

      {/* players navbar*/}
      <PlayerNavBar increasePlayerPoints={increaseValues} decreasePlayerPoints={decreaseValues} playerArray={values}></PlayerNavBar>

      {/* game container */}
      <div className="flex justify-center">
        <GameBoard/>
      </div>




    </motion.div>
  )
}

export default GameScreen
