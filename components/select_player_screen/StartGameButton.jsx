import React from 'react'

/* filtros https://tailwindcss.com/docs/filter-brightness */

const StartGameBtn = (props) => {
  console.log('ddd')
  return (
    <button className="ml-4 pl-4 pr-4 rounded-xl bg-custom-yellow-2  w-12 text-center text-sm font-black hover:cursor-pointer" onClick={props.onClick}> 
        <span>{props.children != null ? props.children : props.text}</span>
    </button> 
  )
}

export default StartGameBtn
