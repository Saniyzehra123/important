import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
export const Card = () => {

  const {handelChange} = useContext(CartContext)

  return (
    <div style={{
        width: "300px",
        height: "300px",
        backgroundColor: "red",
        padding: "10px"
    }}>
      
      <button
      onClick={() => {
        handelChange(1)
      }}
      >Add To Cart</button>
    </div>
  )
}
