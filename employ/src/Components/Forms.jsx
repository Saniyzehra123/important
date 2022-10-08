import React, { useState } from 'react'
import Employment from './Employment'
import EmploymentInput from './EmploymentInput'
import axios from 'axios'

export default function Forms() {

    const [formndata, setFormndata] =  useState([])

    const handleformndata = async ( data) => {
        setFormndata([...formndata, data])
  
        await axios.post("http://localhost:8080/employeedetails", data)
       getData()
    }
     
    const getData= async ()=>{

        const response = await axios.get("http://localhost:8080/employeedetails")
         console.log("resp",response)
        setFormndata(response.data)
    }
  return (
    <div>
      <EmploymentInput handleformndata={handleformndata}></EmploymentInput>
       {
          formndata.map((e)=>{
           <Employment key={e.id}data={ e}></Employment>
              }
          )         
       }
      <Employment ></Employment>
 
    </div>
  )
}
