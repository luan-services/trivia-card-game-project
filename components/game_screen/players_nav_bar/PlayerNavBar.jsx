import React from 'react'
import { useState } from 'react';
import { AnimatePresence, scale } from 'motion/react'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const PlayerNavBar = ({playerArray}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-green-100 container z-10 fixed top-4 left-4  max-w-72 flex flex-col">
            {/* esse motion.div da toggle na animação de movimento para a direita, 
            o pai precisa ter as classes justify-end e start baseadas num useState, 
            o filho precisa ser o motion object e precisa ter a função transition */}

            {/*toggle menu */}
            <div className={`border-4 border-yellow-300 bg-yellow-300 rounded-full w-3/10 flex ${isOpen ? "justify-end" : "justify-start"}`}>
                <AnimatePresence>
                    <motion.button layout transition={{type: "spring", visualDuration: 0.5, bounce: 0.1,}}  
                    className=" border-amber-300 flex rounded-full p-2 pl-4 pr-4 cursor-pointer bg-white" onClick={handleToggle}>
                        <FontAwesomeIcon className="text-amber-300" icon={isOpen ? faXmark : faUser} />
                    </motion.button>
                </AnimatePresence>
            </div>

            {/* this motion.div is a dropdown menu */}
            <AnimatePresence>
                {isOpen && 
                    <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 0.3 }} className="pt-2 bg-blue-100 origin-top">
                        {playerArray.map((value, index) => (
                            <div className="flex flex-wrap pt-3 pr-1 pl-1 bg-amber-200" id={`\div-${index}`} key={index}>
                                <div className="rounded-l-lg flex p-2 pr-3 pl-3 bg-green-300 w-28 justify-between font-bold text-xs">
                                    <span>JOGADOR</span><span>{index + 1}</span>
                                </div>
                                <div className="rounded-r-lg flex p-2 bg-red-300 w-8 justify-center font-bold text-xs">{value}</div>
                            </div>
                        ))}
                    </motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default PlayerNavBar
