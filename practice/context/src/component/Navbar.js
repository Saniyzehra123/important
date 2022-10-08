import React from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'


export default function Navbar() {
  const  {cart} = useContext(CartContext)
  return (
    <nav
    style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: "15px",
        fontSize: "20px",
        border: "2px solid black",
 
    }}>
        Cart:  {cart}
      
    </nav>
  )
}
