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


    {/* function to update points inside each player div */}
    const updateValues = (n, newValue) => {
      const newValues = [...values]
      newValues[n] = newValue
      setValues(newValues)
    }

    

  return (
    /* div to make components fade in and out */
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>

      {/* players navbar*/}
      <PlayerNavBar playerArray={values}></PlayerNavBar>

      {/* game container */}
      <GameBoard increasePlayerPoints={updateValues}/>

      {/* exit button */}


    </motion.div>
  )
}

export default GameScreen
