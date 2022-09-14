import { Navigate, Outlet, Route, Routes,useNavigate } from "react-router-dom"
import Home from "../Home/Home"
import Login from "../Login/Login"

const useAuth = ()=>{
   

    // console.log(localStorage)
    const user = {loggedIn:false}
    return user && user.loggedIn
} 

const ProductRoute = () => {
    const navigate = useNavigate()
    const isAuth = localStorage.token
  return isAuth ? <Outlet/> :  <Login/>
  
  
  
 
}

export default ProductRoute