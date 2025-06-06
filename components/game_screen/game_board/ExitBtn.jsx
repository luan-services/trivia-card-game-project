import React from 'react'

const ExitBtn = (props) => {
  return (
    <button className=" bg-custom-yellow-2 p-4 pt-2 pb-2 fixed right-4 bottom-4 text-center rounded-xl text-xs font-black hover:cursor-pointer" onClick={props.onClick}> 
        <span>{props.children != null ? props.children : props.text}</span>
    </button> 
  )
}

export default ExitBtn