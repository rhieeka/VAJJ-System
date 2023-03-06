import React from "react";

const ForgotPassword = () => {
  return (
    <div className="index-page">
     <div className="index-box">
        <form
          className="form-group form-horizontal mt-5"
          method=""
          id="forgotPassword"
        >
          <label>Password</label>
          <input
            type="new password"
            className="form-control mb-3"
            placeholder="Enter new password"
          />
          <label>Re-type password</label>
          <input
            type="new password"
            className="form-control mb-3"
            placeholder="Enter new password"
          />
           <button type="submit" className="btn btn-info fw-medium">
          Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;
