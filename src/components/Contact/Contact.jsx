import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  return (
    <div className='container mt-5 '>
      <div className="row text ">
        <div className="col-md-12 mt-5  " >
          <div className="title">
             <h2 className=''>Contact Us  </h2>
          </div>
          <div className="icons ">
            <Link to="" ><i className="fa-brands fa-facebook-f me-4"></i> </Link>
            <Link to=""> <i className="fa-brands fa-linkedin me-4"></i></Link>
            <Link to="">  <i className="fa-brands fa-github"></i></Link>

       
         
          </div>
         
         
          
        </div>
        
      </div>
    </div>
  )
}

export default Contact