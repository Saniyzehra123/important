import {useState} from 'react'

export const Form = () =>{ 

    const [formData, setFormData] = useState({
        username: '',
        age: '',})

        const handleChange = (e) => {
            const {id,value}=e.target
            setFormData({
                ...formData,
                [id]:value,
             
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
       // console.log(formData);
          // fetch("",{
          //   method: "POST",
          //   body: JSON.stringify(formData),
  
          // })
   

        }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange}
    //  value ={formData.username}
      type="text"  
      placeholder='Enter Username'/>
     
      <input  onChange={handleChange} 
      
      type="number"  placeholder='Enter  age'/>
     
     
      <input 
      type=" submit"  value="Submit"  />
   
   
    </form>
  )
}
