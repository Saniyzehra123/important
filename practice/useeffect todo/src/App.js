import {useEffect, useState} from "react"
import './App.css';
import Todo from "./Components/Todo";
import Todouse from "./Components/Todouse";

function App() {
 
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/todos")
  //   .then((res) => res.json())
  //   .then(data => {
  //    // console.log(data)
  //    setTodos(data)
  //   })
  // }, []);
 

  return (
    <div className="App">
      <Todouse/>
      {/* {todos.map(todo => (
        <div>{todo.title}
        </div>
      ))}
         */}
    {/* <Todo/> */}
 hello
    </div>
  );
}

export default App;
