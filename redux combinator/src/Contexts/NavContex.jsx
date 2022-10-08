import {createContext, useState} from "react";


export const NavContext = createContext()

export  const NavContextProvider=({children})=>{

     const [cart, setCart] = useState(10)
     const handleChange=(state)=>{
         setCart(state)
     }
    return <NavContext.Provider value={{cart,handleChange }}>{children}

    </NavContext.Provider>
}