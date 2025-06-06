import React from 'react'
import CardDeck from './asd'

const GameBoard = ({increasePlayerPoints}) => {



  return (
      <div className="container w-full min-h-screen flex flex-col justify-center items-center mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-10">
        
        <CardDeck/>


        {/* MAEK COMPONENT PLAYER SCREEN GAME SCREEN PASS DOWN FUNC TO UPDATE PLAYER SCREEN*/}
        <button className='bg-yellow-200' onClick={() => {increasePlayerPoints(0, 222)}}>update div 0 to 222</button>

      </div>
  )
}

export default GameBoard
