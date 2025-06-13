import React from 'react'
import { useState } from 'react';
import ExitBtn from './ExitBtn';
import ConfirmBtn from "./ConfirmBtn";


const Exit = () => {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ExitBtn onClick={togglePopup}>X</ExitBtn>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50">
          <div className="w-76 md:w-88 bg-white p-6 md:p-10 rounded-lg shadow-lg  text-center">
            <h2 className="text-sm md:text-lg font-bold mb-4 font-inter">Deseja recomeçar o jogo?</h2>
            <div className="flex justify-center gap-6">
              
              <ConfirmBtn onClick={() => window.location.reload()}>sim</ConfirmBtn>
              <ConfirmBtn onClick={togglePopup}>não</ConfirmBtn>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Exit
