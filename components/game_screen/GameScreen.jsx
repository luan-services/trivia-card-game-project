import React, { useEffect } from 'react'
import { useState } from 'react'
import PlayerNavBar from './players_nav_bar/PlayerNavBar';

const GameScreen = ({playerNumber}) => {
    console.log(playerNumber)

    {/* state to make the players divs */}
    const [values, setValues] = useState(Array(1).fill(0));

    {/* effect ti update the player div quantity based on playerNumber value*/}
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
    <div className="container w-full min-h-screen flex flex-wrap justify-center items-center mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* MAEK COMPONENT PLAYER SCREEN */}
        <PlayerNavBar playerArray={values}></PlayerNavBar>


        {/* MAEK COMPONENT PLAYER SCREEN GAME SCREEN PASS DOWN FUNC TO UPDATE PLAYER SCREEN*/}
        <button className='bg-yellow-200' onClick={() => {updateValues(0, 222)}}>update div 0 to 222</button>

    </div>
  )
}

export default GameScreen
