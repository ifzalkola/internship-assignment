import React from "react";

import "./mobile-login.scss";

const MobileLogin = () => {
  return (
    <div
      className="mobile-login"
      style={{ backgroundImage: `url('/assets/Bg.png')` }}
    >
      <div
        className="mobile-login-top"
        style={{ backgroundImage: `url('assets/Bg 2.3.png')` }}
      >
        <img src="/assets/object 3.png" alt="" />
      </div>
      <div className="mobile-login-bottom">
        <h2>LOGIN</h2>
        <div className="input-container">
          <label htmlFor="mobile-number">Enter Your Mobile Number</label>
          <div className="input-wrapper">
            <span>+91</span>
            <input type="number" id="mobile-number" maxLength="10" />
          </div>
          <button> Send OTP!</button>
        </div>
      </div>
    </div>
  );
};
export default MobileLogin;
