import React, {useState} from "react";
import logo from "../images/VAJJ.png";
import { useNavigate } from 'react-router-dom';


const Login =()=> {
    // State variables
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    let navi = useNavigate();

    const database = [
      {
          username: "admin",
          password: "admin"
      }
  ];

  async function handleSubmit(event) {
 event.preventDefault();
      const userData = database.find((n) => n.username === username);
      if (userData) {
          if (userData.password === password) {
              navi('/dashboard');
          }
          else {
              alert("Invalid username or Password");
          }
      }
      else {
          alert("Invalid username or Password");
      }
      setUserName("");
      setPassword("");


  }


  return (
    <div className="index-page">
    <div className="index-box">
     <form onSubmit={handleSubmit} className="form-horizontal" id="login_form">
    
     <img className="logo" alt="logo" src={logo}/>
        <h3 className="text-center">Sign In</h3>

        <div className="form-group mb-3">
          <label>Username</label>
          <input
          name= "username"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter Username"
            required
          />
        </div>

        <div className=" form-group mb-3">
          <label>Password</label>
          <input
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter Password"
            required
          />
        </div>

        <div className="form-group mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="form-group">
         <a href="/dashboard">
         <button type="submit" className="btn btn-info fw-medium" >
           Login
          </button>
         </a>
        </div>
        <p className="form-group forgot-password text-center mt-2">
          Forgot <a href="/forgot-password">password?</a> or need an account <a href="/sign-up">SignUp</a>
        </p>
      </form>
     </div>
    </div>
  );
}
export default Login;
