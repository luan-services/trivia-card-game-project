import React from 'react'

const ChangeNumberBtn = (props) => {
  return (
    <button className=" bg-custom-yellow-2 pl-4 pr-4 text-center w-12 rounded-xl font-black hover:cursor-pointer" onClick={props.onClick}> 
        <span>{props.children != null ? props.children : props.text}</span>
    </button> 
  )
}

export default ChangeNumberBtn
