import React from 'react'
import { useState } from 'react';


const ExitBtn = () => {

      const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={togglePopup} className="bg-blue-500 text-white px-4 py-2 rounded fixed right-4 bottom-4">
        X
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50">
          <div className="w-76 bg-white p-6 rounded shadow-lg  text-center">
            <h2 className="text-xl font-bold mb-4">Deseja recomeçar o jogo?</h2>
                        <button
              onClick={() => window.location.reload()}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Sim
            </button>
            <button
              onClick={togglePopup}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Não
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExitBtn
