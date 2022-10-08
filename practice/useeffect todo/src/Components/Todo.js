
import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import { TodoInput } from './TodoInput'
 

export default function Todo() {

    const [todolist,setTodolist] = useState([])
    const getData=(todo)=>{
        const payload = {
            title: todo,
            status:false,
        }
        setTodolist([...todolist, payload]);
    }
  return (
    <div>
      <TodoInput getData={getData}  />
      {todolist.map((e)=>(
<TodoItem todo= {e}></TodoItem>
      ))}
      
    </div>
  )
}
