import React from 'react'
import { useState } from 'react'
import StartGameBtn from './StartGameButton'
import ChangeNumberBtn from './ChangeNumberButton'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import chickImg from "../../src/assets/images/cartoon-chick.png"

const SelectPlayerScreen = ({changePlayerNumber}) => {

    {/* state to display the number of players and choose*/}
    const [displayNumber, setDisplayNumber] = useState(0)

    {/* function to increase / decrease the player number*/}
    const changeDisplayNumber = (type) => {
      if (type == 'add' && displayNumber < 12) {
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

          <div className="flex justify-center text-center ml-4 pb-4">
            <img className=" max-h-44" src={chickImg} alt="Chicke Logo"></img>
          </div>
            
          <div className="flex justify-center text-center pb-1">
                <h3 className="text-2xl font-bold"> 
                    NEM A PINTO
                </h3> 
            </div>

            <div className="flex justify-center text-center pb-4">
                <h3 className="text-sm"> 
                    selecione a quantidade de jogadores
                </h3> 
            </div>

            <div className="flex justify-center">
                          <ChangeNumberBtn text="-" onClick={() => changeDisplayNumber('subtract')}></ChangeNumberBtn> {/* função com parâmetro só pode ser passada do jeito acima */}
            <span className="p-3 w-10 text-sm  text-center font-bold font-inter" >{displayNumber}</span>


            <ChangeNumberBtn text="+" onClick={() => changeDisplayNumber('add')}></ChangeNumberBtn>
            <StartGameBtn text={<FontAwesomeIcon icon={faPlay} />} onClick={() => changePlayerNumber(displayNumber)}></StartGameBtn>
            </div>
        </div>
    </motion.div>

  )
}

export default SelectPlayerScreen
