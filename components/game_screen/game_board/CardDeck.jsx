import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { animais } from "../../../objects/animais.js"
import { arte } from "../../../objects/arte.js"
import { ciencia } from "../../../objects/ciencia.js"
import { cultura_brasileira } from "../../../objects/cultura_brasileira.js"
import { cultura_pop } from "../../../objects/cultura_pop.js"
import { games } from "../../../objects/games.js"
import { geografia } from "../../../objects/geografia.js"
import { historia } from "../../../objects/historia.js"
import { musica } from "../../../objects/musica.js"
import chickIcon from "../../../src/assets/images/cartoon-chick-icon.png"

/* array of items */
const values = [...animais, ...arte, ...ciencia, ...cultura_brasileira, ...cultura_pop, ...games, ...geografia, ...historia, ...musica]

/* function to shuffle */
const randomize = (arr) => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const CardDeck = () => {

    {/* set to make the exit= property work when div is swiped*/}
    const [isSwiping, setIsSwiping] = useState(false);

    {/* set to prevent locked divs to be moved (always the bottom div) */}
    const [isUnlocked, setIsUnlocked] = useState(false);

    {/* make a new useState array with a shuffled card deck */}
    const [deck, setDeck] = useState(() => randomize(values));

    {/* set the current position of the picked card */}
    const [currentIndex, setCurrentIndex] = useState(0);
    const topValue = deck[currentIndex];
    const bottomValue = deck[currentIndex + 1];

    {/* motion to make the div rotates when swiping (tinder effect)*/}
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-15, 15]);

    const handleSwipe = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex >= deck.length - 1) {
            // Reshuffle when reaching the end
            console.log('end')
            const newDeck = randomize(values);
            setDeck(newDeck);
            setCurrentIndex(0);
        }
        setIsSwiping(true);
        setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            setIsSwiping(false);
            setIsUnlocked(false);
        }, 300);
    };

  return (

    /* container for the cards */
    <div className="relative w-64 h-92 overflow-visible">

        {/* bottom card */}
        <div className="absolute w-10/10 h-10/10 bg-white border-3 border-custom-yellow-5 rounded-xl flex flex-col items-center
                text-xl p-2 z-10">

<div className="p-2 pb-0 w-full bg-custom-yellow-2 text-center rounded-lg font-bold items-center">
                    <span>{bottomValue.categoria.toUpperCase()}</span>
                    <img className="mx-auto max-h-6" src={chickIcon} alt="Chicke Logo"></img>
                </div>
            
                <div className=" p-2 mt-4 bg-gray-100 text-center rounded-lg font-inter font-bold text-sm">
                    {bottomValue.pergunta}
                </div>

                <div className="flex flex-col gap-8 mb-auto mt-auto">
                    
                        <div className="justify-center flex">
                        <button disabled>
                            <div className=" p-3 rounded-lg font-inter font-bold text-sm  bg-custom-yellow-2 shadow-sm border-b-3 border-custom-yellow-4">
                                mostrar resposta 
                            </div>
                        </button>

                        </div>

                </div>







        </div>

        {/* top card */}
        <AnimatePresence>
        {!isSwiping && 
            <motion.div className="absolute w-10/10 h-10/10 bg-white border-3 border-custom-yellow-5 rounded-xl flex flex-col items-center
                 text-xl p-2 z-20"
                key={topValue.categoria} drag={isUnlocked ? 'x' : false} dragConstraints={{ left: 0, right: 0 }}  whileDrag={{ scale: 1.05 }}
                exit={{ opacity: 0 }}
                onDragEnd={(ev, info) => {
                    if (!isUnlocked) return;
                    if (Math.abs(info.offset.x) > 100) {
                        x.stop(); 
                            handleSwipe();
                            
                            setTimeout(() => {
                                x.set(0); // reset position for the next card
                            }, 300);
                    }}}
                style={{
                    x,
                    rotate,
                    cursor: isUnlocked ? 'grab' : 'default'}}>

                <div className="p-2 pb-0 w-full bg-custom-yellow-2 text-center rounded-lg font-bold items-center">
                    <span>{topValue.categoria.toUpperCase()}</span>
                    <img className="mx-auto max-h-6" src={chickIcon} alt="Chicke Logo"></img>
                </div>
            
                <div className=" p-2 mt-4 bg-gray-100 text-center rounded-lg font-inter font-bold text-sm">
                    {topValue.pergunta}
                </div>

                <div className="flex flex-col gap-8 mb-auto mt-auto">
                    
                    {!isUnlocked && 
                        <div className="justify-center flex">
                        <button className={`${isUnlocked ? "cursor-grab" : "cursor-pointer"}`} onClick={() => setIsUnlocked(true)}>
                            <div className=" p-3 rounded-lg font-inter font-bold text-sm  bg-custom-yellow-2 shadow-sm border-b-3 border-custom-yellow-4">
                                mostrar resposta 
                            </div>
                        </button>

                        </div>
                    }

                    {isUnlocked && <div>
                        <div className="mt-2 p-2 bg-gray-100 text-center rounded-lg  font-inter font-bold  text-sm">
                        {topValue.resposta}

                        </div>
                        <div className="mt-2 p-2 bg-gray-100 text-center rounded-lg  font-inter font-bold  text-sm">
                        {topValue.fato}

                        </div>
                    </div>}
                </div>

            </motion.div>}
        </AnimatePresence>
    </div>
  );
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 16px',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: 'white',
  color: '#333',
};

export default CardDeck;