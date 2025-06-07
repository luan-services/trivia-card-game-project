import React from 'react'

const ExitBtn = (props) => {
  return (
    <button className=" bg-custom-yellow-2 p-4 pt-3 pb-3 text-center rounded-xl font-black hover:cursor-pointer" onClick={props.onClick}> 
        <span>{props.children != null ? props.children : props.text}</span>
    </button> 
  )
}

export default ExitBtn