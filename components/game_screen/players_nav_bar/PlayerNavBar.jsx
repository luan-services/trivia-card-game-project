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
        <div className="bg-amber-100 container z-10 fixed top-4 left-4  max-w-72 flex flex-col">
            {/* esse motion.div da toggle na animação de movimento para a direita, 
            o pai precisa ter as classes justify-end e start baseadas num useState, 
            o filho precisa ser o motion object e precisa ter a função transition */}

            {/*toggle menu */}
            <div className={`bg-blue-100 p-1 rounded-lg flex ${isOpen ? "justify-end" : "justify-start"}`}>
                <AnimatePresence>
                    <motion.button  layout transition={{type: "spring", visualDuration: 0.5, bounce: 0.1,}}  
                    className=" rounded-xl p-2 pl-4 pr-4 flex bg-amber-600" onClick={handleToggle}>
                        <FontAwesomeIcon icon={isOpen ? faXmark : faUser} />
                    </motion.button>
                </AnimatePresence>
            </div>

            {/* this motion.div is a dropdown menu */}
            <AnimatePresence>
                {isOpen && 
                    <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 0.1}} className="origin-top">
                        {playerArray.map((value, index) => (
                            <div className="flex flex-wrap bg-red-100" id={`\div-${index}`} key={index}>
                                <div className="flex bg-red-300">jogador {index}</div>
                                <div className="flex bg-red-300">{value}</div>
                            </div>
                        ))}
                    </motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default PlayerNavBar
