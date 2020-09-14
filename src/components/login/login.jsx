import React from "react";

import "./login.scss";

const Login = ({ setStep }) => {
  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url('/assets/Bg.png')` }}
    >
      <div
        className="login-top"
        style={{ backgroundImage: `url('/assets/Bg 2.2.png')` }}
      >
        <img src="/assets/object 2.png" alt="" />
      </div>
      <div className="login-bottom">
        <h2>LOGIN</h2>
        <div className="login-btn-container">
          <button onClick={() => setStep(4)}>
            <img src="\assets\icon _mobile.png" alt="mobile" />
            Enter your Mobile Number
          </button>
          <button>
            <img src="\assets\icon _fb.png" alt="mobile" />
            Continue With Facebook
          </button>
          <button>
            <img src="\assets\icon _google.png" alt="mobile" />
            Continue With Google
          </button>
          <button>
            <img src="\assets\icon _mail.png" alt="mobile" />
            Continue With Email
          </button>
        </div>
        <p>
          By Continuing, You agree to our
          <span>Terms of Service & Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
