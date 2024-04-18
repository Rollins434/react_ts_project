
import React from 'react'

interface ChildProps {
    color:string;
    onClick: () => void;
}
export  function Child(props:ChildProps) {
    const {color,onClick} = props
  return (
    <div>{color}
    <button onClick={onClick}>
        Click Me
    </button>
    </div>
  )
}


export const ChildAsFC :React.FC<ChildProps> = (props:ChildProps) =>{
    const {color,onClick} = props
    return(
        <div>{color}
        <button onClick={onClick}>
        Click Me
    </button></div>
    )
}
