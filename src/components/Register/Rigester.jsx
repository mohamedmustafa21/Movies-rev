import { React, useState, useEffect } from "react";
import axios from "axios";
// import { createBrowserHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Rigester() {
  // localStorage.clear()

  const navigate = useNavigate();

  // let history = createBrowserHistory();
  // console.log(history)

  let [newUser, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  function getUser(e) {
    let myUser = { ...newUser };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  const [errorReg, seterror] = useState([]);
 
// console.log(errorReg)

  //  const navigate = useNavigate();
 

  async function FormSubmit(e) {
    axios.interceptors.response.use(undefined, (error) => {
        const erorrDataa = error.response.data;
        seterror(erorrDataa)

        // if(erorrDataa.message ==='Success' ){
        //     console.log('gotit')
        // }
    
      });
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/register", newUser);
    const json = res.data;
    if (json.message === 'Success') {
      navigate("/login");

    } else {
       console.log('helllo')
    }
  }

  return (
    <div className="container">
      <div className="row ">
        {/* <h2>You Have To Login To See Home Page</h2> */}
        <div className="parent">
          <div className="form-div">
            
            <form onSubmit={FormSubmit} className="w-50   ">
              <div className="my-2">
              <div>
              {errorReg.message ? (
                <div className="alert-danger rounded-3 py-3 m-2 p-3">{errorReg.message}</div>
              ) : (
                <></>
              )}
            </div>
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
                <label htmlFor="email">Your Email :</label>
                <input
                  onChange={getUser}
                  type="email"
                  className="form-control"
                  name="email"
                  id="emailInp"
                />
              </div>
              <div className="my-2">
                <label htmlFor="email">Your Password :</label>
                <input
                  onChange={getUser}
                  type="password"
                  className="form-control"
                  name="password"
                  id="passwordInp"
                />
              </div>
              <div className="my-2">
                <label htmlFor="password">password confirmation :</label>
                <input
                  onChange={getUser}
                  type="password"
                  className="form-control"
                  name="password_confirmation"
                  id="password_confirmation"
                />
              </div>

              <button type="submit " className="btn btn-info ">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rigester;
