import React from 'react'

/* filtros https://tailwindcss.com/docs/filter-brightness */

const StartGameBtn = (props) => {
  console.log('ddd')
  return (
    <button className="p-3 w-full rounded-xl bg-yellow-300 0 text-sm font-bold hover:cursor-pointer" onClick={props.onClick}> 
        <span>{props.children != null ? props.children : props.text}</span>
    </button> 
  )
}

export default StartGameBtn
