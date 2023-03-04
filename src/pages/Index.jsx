import "../App.css";
import React from "react";

const IndexPage = () => {
  return (
    <div className="index-page">
      <div className="index-box">
        <h1 className="logo">VAJJ</h1>
        <form class="form-horizontal" method="" id="login_form">
          <div className="form-group" id="form-login">
            <label for="" class="control-label">
              Username
            </label>
            <input class="form-control" id="user" name="user" type="text" />
          </div>
          <div class="form-group">
            <label for="" class="control-label">
              Password
            </label>
            <input type="password" name="pass" id="pass" class="form-control" />
          </div>
          <div class="form-group" id="msg">
            <div className="login text-center m-2">
              <button type="submit" class="btn btn-info">
                Login
              </button>{" "}
              <br />
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default IndexPage;
