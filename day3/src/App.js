 
import './App.css';
import {Todo} from "./component/Todo"
function App() {
 

// const getData = (data) => {
//   console.log("got data from child : " ,data)
// };


  // const handleChange = (value) => {
  //   console.log("hello",value)
  // }
  // return First(handleChange)
  // const data ="hello c1"
  return   <div className="App">
    {/* <First dataFn ={getData}/>
    <Second/> */}
    <Todo/>
    </div>
 
}

// function First({dataFn}) {
  
//   const data ="hello"
//   return <div>first child</div>
// }
// function  Second( ) {
  
//   return <div> sec child</div>

// function First({ data }) {
//   console.log("recive",data);
//   return <div>first child</div>
// }
// function  Second({ data }) {
  
//   return <div> sec child</div>
 
//  }


export default App;
