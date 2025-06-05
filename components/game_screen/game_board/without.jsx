import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const values = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

const getRandomValue = (exclude) => {
  let newValue;
  do {
    newValue = values[Math.floor(Math.random() * values.length)];
  } while (newValue === exclude);
  return newValue;
};

const StackSwitcher = () => {
  const [topValue, setTopValue] = useState(getRandomValue(null));
  const [bottomValue, setBottomValue] = useState(getRandomValue(topValue));
  const [isSwiping, setIsSwiping] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSwipe = () => {
    setIsSwiping(true);
    setTimeout(() => {
      const newBottom = getRandomValue(topValue);
      setTopValue(bottomValue);
      setBottomValue(newBottom);
      setIsSwiping(false);
      setIsUnlocked(false); // lock the new top card
    }, 300);
  };

  return (
    <div style={{ position: 'relative', width: '240px', height: '260px', overflow: 'visible' }}>
      {/* Bottom Card */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#90be6d',
          borderRadius: '12px',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.4rem',
          padding: '20px',
        }}
      >
        {bottomValue}
        <button style={buttonStyle} disabled>
          Locked
        </button>
      </div>

      {/* Top Card */}
      <AnimatePresence>
        {!isSwiping && (
          <motion.div
            key={topValue}
            drag={isUnlocked ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              if (!isUnlocked) return;

              if (Math.abs(info.offset.x) > 100) {
                handleSwipe();
              }
            }}
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            whileDrag={{ scale: 1.05 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: '#f94144',
              borderRadius: '12px',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.4rem',
              padding: '20px',
              cursor: isUnlocked ? 'grab' : 'default',
            }}
          >
            {topValue}
            <button style={buttonStyle} onClick={() => setIsUnlocked(true)}>
              {isUnlocked ? 'Swipe Enabled' : 'Unlock to Swipe'}
            </button>
          </motion.div>
        )}
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
  cursor: 'pointer',
};

export default StackSwitcher;