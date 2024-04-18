import React from 'react'
import { Child } from './Child'

const Parent = () => {

    function handleClick(){
        console.log("clicked a button")
    }
  return (
    <> 
    <Child color="blue" onClick={handleClick}/>
    </>
  )
}

export default Parent