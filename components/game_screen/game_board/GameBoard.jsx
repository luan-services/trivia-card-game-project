import React from 'react'
import CardDeck from './CardDeck'
import Exit from './Exit'

const GameBoard = () => {



  return (
    <div>
      <div className="container w-full min-h-screen flex flex-col justify-center items-center py-10 px-4 sm:px-6 md:px-8 lg:px-10">
        <CardDeck/>
      </div>
      {/* exit button */}
      <Exit></Exit>
    </div>

  )
}

export default GameBoard
