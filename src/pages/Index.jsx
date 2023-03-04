import "../App.css";
import React from "react";
import logo from "../images/VAJJ.png";

const IndexPage = () => {
  const handleButtonClick = () => {
    console.log("Button clicked in App");
  };

  return (
    <div className="index-page">
      <div className="index-box">
        <img className="logo" alt="logo" src={logo} />
        <form className="form-horizontal" method="" id="login_form">
          <div className="form-group" id="form-login">
            <label for="" className="control-label">
              Username
            </label>
            <input className="form-control" id="user" name="user" type="text" />
          </div>
          <div className="form-group">
            <label for="" className="control-label">
              Password
            </label>
            <input type="password" name="pass" id="pass" class="form-control" />
          </div>
          <div className="form-group" id="msg">
            <button className="btn-info fw-bold" onClick={handleButtonClick}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IndexPage;
