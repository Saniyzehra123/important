import React, { useState } from 'react'

 function Counter()  {

    const [counter,setCounter]=useState(0)

    // const handelChange[]
  return (
    <div>
        <h1>counter:{counter} </h1>
      <button onClick={()=>{
        if(counter >= 10){
          return
        }
          setCounter(counter+1)
      }}>add</button>

      <button onClick={()=>{
          setCounter(counter-1)
      }}>sub</button>

      <button onClick={()=>{
          setCounter(counter*2)
      }}>mult</button>
    </div>
  )
}

export default Counter
