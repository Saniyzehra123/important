import React, { useState } from 'react'

export default function EmploymentInput({handleformndata}) {
    const initValues = {
        name:"",
        date:"",
        image:"",
    }
    const [formndata, setFormndata] = useState(initValues)
 
    const handelChange = (event) => {
        const { name, value } = event.target
        setFormndata({...formndata, [name]: value})
    }
 
    const handelSubmit = (e) => {
        e.preventDefault()
        handleformndata(formndata)
        
    }
    return (
    <div>
        <form onSubmit={handelSubmit}>
            <input name="name" label="Name" onChange={handelChange}></input>
            <input type="date" name="date" id="DataID" onChange={handelChange}></input>
            <input type="img" name="image" id="Image" onChange={handelChange}></input>
            <input type="submit" name="Submit" id="sumit" value="Submit"/>
        </form>
      
    </div>
  )
}
