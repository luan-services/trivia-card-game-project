import React from 'react'
import { useState } from 'react'
import StartGameBtn from './StartGameButton'
import ChangeNumberBtn from './ChangeNumberButton'
import { motion } from "motion/react"

const SelectPlayerScreen = ({changePlayerNumber}) => {

    {/* state to display the number of players and choose*/}
    const [displayNumber, setDisplayNumber] = useState(0)

    {/* function to increase / decrease the player number*/}
    const changeDisplayNumber = (type) => {
      if (type == 'add' && displayNumber < 16) {
        setDisplayNumber(displayNumber + 1)
        
      }
      else if (type == 'subtract' && displayNumber > 0) {
        setDisplayNumber(displayNumber - 1)
        
      }
    }


  return (

    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}
      className="container w-full min-h-screen flex flex-wrap justify-center items-center mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="bg-white p-5 max-w-100 max-h-160 rounded-xl shadow-lg border-1 border-gray-300">
            <ChangeNumberBtn text="-" onClick={() => changeDisplayNumber('subtract')}></ChangeNumberBtn> {/* função com parâmetro só pode ser passada do jeito acima */}
            <span>{displayNumber}</span>
            <ChangeNumberBtn text="+" onClick={() => changeDisplayNumber('add')}></ChangeNumberBtn>
            <StartGameBtn text="start" onClick={() => changePlayerNumber(displayNumber)}></StartGameBtn>
        </div>
    </motion.div>

  )
}

export default SelectPlayerScreen
