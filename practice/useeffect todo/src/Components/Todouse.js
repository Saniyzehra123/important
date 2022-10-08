import React, { useEffect, useState } from 'react'
 

export default function Todouse() {
    
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

 useEffect(() => {
    getData()
}, []);
const getData = async() => {
  const data = await  fetch("http://localhost:8080/todos")
    .then((res) => res.json())
    
     // console.log(data)
     setTodos(data)
}
 

  return (
    <div>
        <input
        onChange={(e) => setText(e.target.value)}
        type="text" placeholder="Add Todo" />
        <button onClick={() => {
            const payload = {
                title: text,
              status: false
            };

          fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            })

        }}>Add</button>
          {todos.map(todo => (
        <div>{todo.title}
        </div>
      ))}
    </div>
  )
}
