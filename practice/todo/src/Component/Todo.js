import React, { useState } from 'react'
import { Todoitem } from './Todoiem'
import { TodoInput } from './TodoInput'

export  const Todo =()=> {
const [todoList,setTodosList] =  useState([])


const getData = (todo) =>{
    setTodosList([...todoList,todo])
}

  return (
    <div>
      <TodoInput getData={getData}/>

      {todoList.map((e)=>(
<Todoitem todo= {e}></Todoitem>
      ))}
      
    </div>
  )
}

 