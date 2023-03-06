import React, {useState} from "react";
import logo from "../images/VAJJ.png"


const Login =props=> {
    // State variables
    const [form, setForm] = useState({
        username: "",
        password: "",
      });


  const onUpdateField = e => {
    const nextFormState = {
      form,[e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    alert(JSON.stringify("Please try again"));
  };



  return (
    <div className="index-page">
    <div className="index-box">
     <form onSubmit={onSubmitForm} className="form-horizontal" id="login_form">
     <img className="logo" alt="logo" src={logo}/>
        <h3 className="text-center">Sign In</h3>

        <div className="form-group mb-3">
          <label>Username</label>
          <input
          name= "username"
          value={form.username}
          onChange={onUpdateField}
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
          value={form.password}
          onChange={onUpdateField}
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
         <a href="/view">
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
