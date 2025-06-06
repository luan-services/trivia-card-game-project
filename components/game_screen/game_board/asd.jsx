import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

/* array of items */
const values = ['oceano', 'pop', 'bolas', 'ciencia', 'futebol', 'geografia', 'historia'];

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
    <div className="relative w-60 h-65 overflow-visible">

        {/* bottom card */}
        <div className="absolute w-10/10 h-10/10 bg-yellow-200 text-white rounded-xl 
            flex flex-col items-center justify-center text-lg p-5 z-10">
            {bottomValue}
            <button style={buttonStyle} disabled>
                Locked
            </button>
        </div>

        {/* top card */}
        <AnimatePresence>
        {!isSwiping && 
            <motion.div className="absolute w-10/10 h-10/10 bg-yellow-200 text-white rounded-xl flex flex-col items-center 
                justify-center text-lg p-5 z-20"
                key={topValue} drag={isUnlocked ? 'x' : false} dragConstraints={{ left: 0, right: 0 }}  whileDrag={{ scale: 1.05 }}
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
                {topValue}
                <button className={` ${isUnlocked ? "cursor-grab" : "cursor-pointer"}`} style={buttonStyle} onClick={() => setIsUnlocked(true)}>
                {isUnlocked ? 'Swipe Enabled' : 'Unlock to Swipe'}
                </button>
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