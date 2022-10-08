// import React from 'react'
import { useState,useEffect } from 'react'
// import axios from 'axios'
export  const Todo=() => {

    const [todos,setTodos]=useState([]) 
   const [text,setText]=useState("")

   const [loading,setLoading]=useState(true)
     const [page,setPage] = useState(1);
    
  useEffect(() => {
 
       getData()

        },[page]);
        
    const getData = async ()   => {
      const data = await  fetch("http://localhost:8080/todos").then((res) =>
   res.json()
   )

   setTodos(data);
   setLoading(false)
    }
      
// console.log("mounting")
//     getData()

    
//    },[page]);

  
//       const  getData= () => {
//      axios.get(`http://localhost:8080/todos?_limit=3&_page=${page}`).then((res) =>{
//   //  res.json())

//    setTodos(res.data);
//     })
  // }
 
  return loading ?  (
   "Loading..."):(
   <div>
     < input  onChange={(e)=>setText(e.target.value)}
      type="text"
       placeholder='enter todo' />
     <button  onClick={()=>{
       const payload={
          title:text,
          status:false
       }
       fetch("http://localhost:8080/todos" ,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(payload),
        }).then(()=> {
          getData()
        })
   
     }} >add todo</button>
     {todos.map((t) =>  
    <div>{t.title}</div>
     )}
 
    </div>
  )
}
