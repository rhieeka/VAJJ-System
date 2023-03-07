 
import React from 'react'

 
const Logout = () => {
    localStorage.clear();
 
    return (
      <div className="index-page text-center">
      <div className="index-box text-dark p-5">
          <h2>You Are Now Logged Out.</h2>
          <h2>Thank you and Have a Great Day!</h2>
         
          <a href="/sign-in">
         <button type="submit" className="btn-logout btn-info fw-medium" >
           Back to Login
          </button>
         </a>
      
       </div>
      </div>
    );
  }
export default Logout;
