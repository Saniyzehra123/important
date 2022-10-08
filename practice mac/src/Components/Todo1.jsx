import React, { useEffect, useState } from 'react'
import {axios} from 'axios'

export default function Todo1() {

const [todo, setTodo] = useState([]);
const [text, setText] = useState('');
const [loading,setLoading]=useState(true);
const [page,setPage]=useState(1);

useEffect(() => {
    getData()
}, [page])


    
const getData = async ()   => {
    const data = await  fetch("http://localhost:8080/todos?_page=&{page}&_limit=3").then((res) =>
 res.json()
 )

 setTodo(data);
 setLoading(false)
}

//       const  getData= async () => {
//         const data = await   axios.get("http://localhost:8080/todos")
//         .then((res) => {
//             setTodo(res.data)
//             }).catch((err) => {
//                 console.log(err)
//             }
//         )

//    setTodo(data)

     
//     }

        
  return (
    <div>
      <input type="text" placeholder='enter ' onChange={(e) => setText(e.target.value)} />
        <button onClick={()=>{
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
   
     }} 
        
        >Add todo</button>

        {
            todo.map((todo) =>  (
             <div > {todo.id} 
             <p>{todo.title} </p>
             </div>
         
            ))
        }

          <button  
          onClick={() => {
            setPage(page + 1)

          }}
          > next</button>
          <button
          onClick={() => {
            setPage(page - 1)

          }
          }
          >previous</button>

          {loading && <div>loading</div>}

          


    </div>
  )
}
