import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';



function Navbar() {

    const navigate = useNavigate();

   function logout(){
        localStorage.clear()
        navigate('/');
    }

  return (
   <>
   <div className="container">
   <nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Movie 2Day</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
 

      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      {
    localStorage.id ? <>
    
    <li className="nav-item">
          <Link className="nav-link" to="/about">About Us </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
        </li>

    </>:''
  }
       
       
        
     
      </ul>
     
      {
    localStorage.id ? <>
    
    <button className='btn btn-danger' onClick={logout}>Logout</button>

    </>:<> <button className='btn btn-success' ><Link to="/">Login</Link></button></>
  }
    </div>
  </div>
</nav>
   </div>
  
   
   </>
  )
}

export default Navbar