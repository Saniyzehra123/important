import {useContext} from "react"
import { CartContext } from "../../contexts/CartContext"

export const Cart = () => {
   
   const {cart} = useContext(CartContext)
    return (
        <nav
        
        style={{
            display: 'flex',
            justifyContent: "end",
            padding:"15px",
            fontSize:"20px",
            border: "1px solid red",
            margin:'10px',
        }}>
            <h5> Cart:{cart} </h5>
        </nav>
    )
}