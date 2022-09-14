import { React, useState, useEffect } from "react";
import axios from 'axios'
// import { createBrowserHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();

    // let history = createBrowserHistory();
    // console.log(history)
    

    let [user, setUser] = useState({ name: "", job: "" });
    function getUser(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        
    }
                
    
                    //  const navigate = useNavigate();

   


    async function FormSubmit(e) {
        e.preventDefault();
        const res = await axios.post("https://reqres.in/api/users/",user);
        const json =  res
        // const history = useNavigate();

        
        console.log(json)

        if(json.status === 201){
            localStorage.setItem("id", res.data.id);
            console.log(localStorage)
            navigate("/home");
        
            // history('/home');
            // console.log(history)
            // navigate('/home');
        }else{
           console.log(json.message)
        }
    
    }

        
        
        return (
        <div>
            <h2>You Have To Login To See Home Page</h2>
            <div className="container h-100 ">
                <div className="d-flex w-100 h-100 justify-content-center  ">
                <form onSubmit={FormSubmit}className=' '>
                

                <div className="my-2">
                    <label htmlFor="email">Your Name :</label>
                    <input
                    onChange={getUser}
                    type="text"

                        className="form-control"
                        name="name"
                        id="emailInp"
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="password">Your Job :</label>
                    <input
                    onChange={getUser}
                        type="text"
                        className="form-control"
                        name="job"
                        id="passInp"
                    />
                </div>

                <button type="submit " className="btn btn-info ">Login</button>
            </form>
                </div>
               
            </div>
        </div>
    );
}

export default Login;
