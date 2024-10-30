import React from 'react'

interface btnTypes {
    addCount: () => void;
    color:string,
    text:string,
}

const Button = ({color, text , addCount}:btnTypes) => {
  return (
    <>
    <button onClick={()=>addCount()} className={`text-white py-1 px-10 rounded-lg ${color} font-bold text-2xl`}>{text}</button>
    </>
  )
}

export default Button