import React from 'react'
import CardDeck from './CardDeck'
import ExitBtn from './ExitBtn'

const GameBoard = () => {



  return (
    <div>
      <div className="container w-full min-h-screen flex flex-col justify-center items-center py-10 px-4 sm:px-6 md:px-8 lg:px-10">
        <CardDeck/>
      </div>
      {/* exit button */}
      <ExitBtn></ExitBtn>
    </div>

  )
}

export default GameBoard
