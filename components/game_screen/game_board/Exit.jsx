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
          <div className="w-76 bg-white p-6 rounded shadow-lg  text-center">
            <h2 className="text-xl mb-4">deseja recomeçar o jogo?</h2>
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
