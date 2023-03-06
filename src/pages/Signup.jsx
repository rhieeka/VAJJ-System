import React from "react";
function Signup() {
  return (
    <div className="index-page">
    <div className="index-box">
    <form className="form-horizontal" method="" id="signUp_form">
        <h3 className="text-center mt-3">Sign Up</h3>

        <div className="form-group mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-info fw-medium">
            Sign Up
          </button>
        </div>
        <p className="form-group forgot-password text-center mt-2">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
     </div>
    </div>
  );
}
export default Signup;
