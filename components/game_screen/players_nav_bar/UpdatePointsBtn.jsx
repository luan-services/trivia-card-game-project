import React from 'react'

const UpdatePointsBtn = (props) => {
  return (
    <button className=" bg-custom-yellow-2 border-2 border-b-4 border-custom-yellow-4 w-8 h-8 text-center 
    rounded-lg font-black text-xs hover:cursor-pointer active:border-b-2 active:border-t-3" onClick={props.onClick}> 
        <span>{props.children != null ? props.children : props.text}</span>
    </button> 
  )
}

export default UpdatePointsBtn
