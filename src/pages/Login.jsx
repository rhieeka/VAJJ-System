import React from "react";
import logo from "../images/VAJJ.png"

function Login() {
  return (
    <div className="index-page">
    <div className="index-box">
     <form className="form-horizontal" method="" id="login_form">
     <img className="logo" alt="logo" src={logo}/>
        <h3 className="text-center">Sign In</h3>

        <div className="form-group mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className=" form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
          <button type="submit" className="btn btn-info fw-medium">
           Login
          </button>
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
