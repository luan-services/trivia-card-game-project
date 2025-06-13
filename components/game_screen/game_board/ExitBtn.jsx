import React from 'react'

const ExitBtn = (props) => {
  return (
    <button className=" bg-custom-yellow-2 border-2 border-b-4 border-custom-yellow-4 w-12 h-10 fixed right-4 bottom-4 
    text-center rounded-xl text-xs font-black hover:cursor-pointer active:border-b-2 active:border-t-3" onClick={props.onClick}> 
        <span>{props.children != null ? props.children : props.text}</span>
    </button> 
  )
}

export default ExitBtn