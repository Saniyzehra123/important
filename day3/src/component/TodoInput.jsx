  import   { useState } from 'react'

export const TodoInput = ({getData})=> {

    const [text,setText] = useState("")
   //console.log("input",text)

    
  
  return (
    <div>
        <input onChange={(e) => {
         // console.log(e.target.value)
         setText(e.target.value)
      }}
      
      type="text"
      placeholder='enter todo'
      />
    <button onClick={()=>{getData(text)}}> add todo </button>
  {/* {text}//ise left side me text jo likhenge woh print hoga */}
    </div>
  )
}
