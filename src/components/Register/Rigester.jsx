import { React, useState, useEffect } from "react";
import axios from 'axios'
// import { createBrowserHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate();

    // let history = createBrowserHistory();
    // console.log(history)
    

    let [newUser, setNewUser] = useState({ name: "", email: "",password:"",password_confirmation:"" });
    function getUser(e) {
        let myUser = { ...newUser };
        myUser[e.target.name] = e.target.value;
        setNewUser(myUser);
        // console.log(myUser)
    }
                
    
                    //  const navigate = useNavigate();

   


    async function FormSubmit(e) {
        e.preventDefault();
        const res = await axios.post("http://127.0.0.1:8000/api/register",newUser);
        const json =  res.data
        // const history = useNavigate();
       
        
        // console.log(json)

        if(json.message === 'Success'){
            localStorage.setItem("email", res.data.user.email);
            // console.log(localStorage)
            navigate("/login");
        
            // history('/home');
            // console.log(history)
            // navigate('/home');
        }else{
        //    console.log('heelooo')
        }
    
    }

        
        
        return (
        <div className="container">
            <div className="row ">

                            {/* <h2>You Have To Login To See Home Page</h2> */}
            <div className="parent">
            <div className="form-div">
                
                <form onSubmit={FormSubmit}className='w-50   '>
                

                <div className="my-2">
                    <label htmlFor="email">Your Name :</label>
                    <input
                    onChange={getUser}
                    type="text"

                        className="form-control"
                        name="name"
                        id="nameInp"
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="password">Your email :</label>
                    <input
                    onChange={getUser}
                        type="email"
                        className="form-control"
                        name="email"
                        id="emailInp"
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="password">password :</label>
                    <input
                    onChange={getUser}
                        type="password"
                        className="form-control"
                        name="password"
                        id="passInp"
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="password">password confirmation :</label>
                    <input
                    onChange={getUser}
                        type="password"
                        className="form-control"
                        name="password_confirmation"
                        id="confirmPassInp"
                    />
                </div>

                <button type="submit " className="btn btn-info ">Register</button>
            </form>
                </div>
            </div>
           
               
            </div>
            </div>
          
       
    );
}

export default Register;
