import React, { createContext, useState } from 'react'

export const CartContext =  createContext()

 export const  CartContextProvider =({children}) =>{

    const [cart, setCart] =  useState(0);

    const handelChange = (inc)=>{
      setCart(cart + inc)
    }
  return (
    <CartContext.Provider value={{cart,handelChange}}> {children}
    {/* <App/> */}
    </CartContext.Provider>
  );
};


 

 
