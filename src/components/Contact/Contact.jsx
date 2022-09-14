import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 ">
      <div className="row text ">
        <div className="col-md-12 mt-5  ">
          <div className="title">
            <h2 className="">Contact Us </h2>
          </div>
          <div className="icons fs-5 fst-italic ">
          <div className="text-center p-3">
           
           <a className="text-white" href="https://www.facebook.com/muhamed.mustafa.96780">
           <i className="fa-brands fa-facebook-f me-4"></i>
           </a>
         </div>
         <div className="text-center p-3">
           
           <a className="text-white" href="https://www.linkedin.com/in/muhamed-mustafa-abb880218/">
           <i className="fa-brands fa-linkedin me-4"></i>
           </a>
         </div>
         <div className="text-center p-3">
           
           <a className="text-white" blank href="https://github.com/mohamedmustafa21">
           <i className="fa-brands fa-github me-4 "></i>
           </a>
         </div>
        
       


           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
