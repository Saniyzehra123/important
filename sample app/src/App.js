 
import './App.css';
import { Form } from './Components/Form';
// import {Form} from './Components./Form';
import {useState,useEffect,useRef} from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);



// useEffect(()=>{
//   startInterval();
// },[])

  useEffect(() => {
    counterRef.current = setInterval(() => {;

      setCounter((p)=> p+ 1);
    },  300);
  }, []);
  return (
    <div  ref={divRef} className="App">
     {/* <Form/> */}
     <h3>Counter: {counter}</h3>
     <div  className='box'></div>
     <div className='box1'></div>
     <div className='box2'></div>
     <div className='box3'></div>
     



 <button
  onClick={() => {
    clearInterval(counterRef.current);
  }}
>  pause </button>
   <button 
  //  onClick={()=>{
  //   startInterval()
  //  }}
   >start</button>
   <button
  //    onClick={()=>{
  //     // clearInterval(counterRef.current);
  //  }}
   >reset</button>
 
    </div>
  );
}

export default App;
