 
import './App.css';
import {useState, useSyncExternalStore} from 'react'
import Counter from './Counter';

function App() {

  const [count,setCounter]=useState(0)

  // const handel=()=>{
  //   if(count >=10){
  //     return
  //   }
  //   setCounter(count+1)
  // }
  // const handel=(value)=>{
  //   if(count>=5){
  //     alert("Counter reached to max")
  //     return;
  //   }
   
  //   setCounter(count+value)

  // }
  
  // if(count >= 10 ){
  //   return<h4>counter reach max value</h4>
  // }


  return (
    <div className="App">
      {/* <h2>Counter: {count} </h2>

      <button onClick={()=>{handel(1)
      }}>add</button>
      <button onClick={()=>{
        handel(-1)
        //     if(count <=0){
        //       return
        //     }
        // setCounter (count-1)
      }}>sub</button>
          <div className=''>Number is{count%2==0 ? "even" : "odd"}</div> */}
          <Counter/>
    </div>
  );
}

  ReadableStreamDefaultController.length("user", async(req,res)=>{

  try{
      const user = await User.find().lean().exec()
      return res.send(user)
  }
  catch{
    return res.status(404).send(err)
  }
})

router.post("/user", async(req,res)={
try{
  const user = await User.create(req.body)
  return res.send(user)
}
catch{
  return res.status(404).send(err)
}
})
route.patch("/user/:id" ,async(req,res)=>{

  try{
    const user = await User.findByIDandUpdate(req.prams.id).lean().exec()
    return res.send(user)
  }
  catch{
    return res.status(500).send(err)
}
})

const arr=[1,2,3,4,4,5]

function double(x) {
  return x*2
}
const res= arr.map(double)
  
 console.log(res)

 const res =arr.map(()=>
   x*2
 )


 const

export default App;
 

route.get("user" ,async(req,res)=>{
try{
  const user = await user.find().lean().exec()
  return res.send(user)
}
 
})
route.post("user" ,async(req,res)=>{
try{
  const user = await user.create(req.body)
  return res.send(user)
}
 
})
export default App;