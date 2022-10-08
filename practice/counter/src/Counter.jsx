import React, { useState } from 'react'

export default function Counter() {

    const [counter, setCounter] = useState(0)

    const handelChange=(value)=>{
        if(counter===0 && value === -1) return;
        
        // if(counter>=5){
        //      alert("You can't go below 0")
        
        // }
        setCounter(counter+value)

    }
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={()=>{  handelChange(1)}}> add</button>
      <button  onClick={()=>{ handelChange(-1) }}> sub</button>
    </div>
  )
}
