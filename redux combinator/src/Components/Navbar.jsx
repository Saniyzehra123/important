
import { Link } from "react-router-dom"
import { NavbarDiv } from "../StyleComponents/NavbarDiv"

export const Navbar=()=>{

    return <NavbarDiv>

             <Link to="/"> Home</Link>
             <Link to="/products">Products</Link>
             <Link to="/cart"> 
           Cart
             </Link>
         
    </NavbarDiv>

}