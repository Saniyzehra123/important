import { Routes ,Route} from "react-router-dom";
import {BodyDiv} from "../StyleComponents/BodyDiv"
import {Footer} from "./Footer"
import {Home} from "./Home"
import {Cart} from "./Cart"
import { Navbar } from "./Navbar";
import { Products } from "./Products";

export const Body=()=>{

    return <BodyDiv>
   <Navbar/>
   <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/products" element={<Products/>}/>
       <Route path="/cart" element={<Cart/>} />
       
   </Routes>
    
    <Footer />
    </BodyDiv>

}