import { useState } from 'react'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
 function Todo() {

    const [todoList,setTodoList]=useState([ ])
    const getData = (todo) =>{
       // console.log("Received",todo);

       const payload = {
         title: todo,
         status:false
       }
        setTodoList([...todoList, payload])
    }
 
    return (
     <div>
      
        <TodoInput getData={getData}/>
    {todoList.map((e)=>(
        <TodoItem todo={e}> </TodoItem>
    ))}

 
     </div>
   )
}


export {Todo}
