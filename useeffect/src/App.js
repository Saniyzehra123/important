import logo from './logo.svg';
import './App.css';
import { useEffect ,useState } from 'react';
import { Todo } from './components/Todo';
import  Demo from './components/Demo';

function App() {
// const [show,setshow]=useState(true)
//   const [count, setCount] = useState(0);
//   const [age, setAge] = useState(12);
  


//   useEffect(() => {
//     console.log('useEffect1');
//   },[count]);

//   useEffect(() => {
//     console.log('useEffect2');
//   },[age]);

//   const [todos, setTodos] = useState([]);


//   useEffect(() => {
//    async function  getData() {
//       const data = await  fetch("http://localhost:8080/todos").then((res) =>
//    res.json())

//    setTodos(data);
//     }
//  getData()

    
//   },[]);

 
 
//   console.log("before")
//   useEffect(()=>{
//    console.log("inside")

//   })
// useEffect(()=>{
//   console.log("inside2")
// })
 
// console.log("after")
  return (
    <div className="App">
 <Demo/>
{/* <Todo />  */}
  {/* {todos.map((todo) => (
    <div>{todo.id}.{todo.title}</div>))} */}
 
  {/* {show ? <Todo /> :null }
  <button onClick={() => {
    setshow{!show}
  }}
  >
    {show ? 'hide' : 'show'}Todos
  </button> */}

   {/* <h3>Counter:{count}</h3>
   <button onClick={ ()=>{setCount+1}}>add</button>
   <h3>Age:{age}</h3>

   <button onClick={setAge+1}>age</button> */}
    </div>
  );
}

export default App;
