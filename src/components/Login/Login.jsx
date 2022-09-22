import { React, useState, useEffect } from "react";
import axios from "axios";
// import { createBrowserHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
  // localStorage.clear()

  const navigate = useNavigate();

  // let history = createBrowserHistory();
  // console.log(history)

  let [user, setUser] = useState({ email: "", password: "" });
  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  axios.interceptors.response.use(undefined, (error) => {
    const erorrData = error.response.data;
    // console.log(erorrData)
  });

  //  const navigate = useNavigate();

  const [error, seterror] = useState([]);

  async function FormSubmit(e) {
    e.preventDefault();
    const res = await axios.post("https://laravel-backendd.herokuapp.com/api/login", user);
    const json = res.data;
    // const history = useNavigate();
    // console.log(json)
    if (json.Message === "Success") {
      localStorage.setItem("token", json.token);
      localStorage.setItem("user", json.user.name);
      // console.log(localStorage);

      navigate("/home");

      // history('/home');
      // console.log(history)
      // navigate('/home');
    } else {
      seterror(json);
      // console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="row ">
        {/* <h2>You Have To Login To See Home Page</h2> */}
        <div className="parent">
          <div className="form-div">
            <div>
              {error.Message ? (
                <div className="alert-danger rounded py-3 m-2 p-3">{error.Message}</div>
              ) : (
                <></>
              )}
            </div>
            <form onSubmit={FormSubmit} className="w-50   ">
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
                <label htmlFor="password">Password :</label>
                <input
                  onChange={getUser}
                  type="password"
                  className="form-control"
                  name="password"
                  id="passInp"
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

export default Login;
