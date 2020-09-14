import React from "react";

import "./splash.scss";

const Splash = () => {
  return (
    <div className="splash">
      <div style={{ backgroundImage: `url('/assets/Bg.png')` }} className="bg">
        <img src="/assets/Tiffinia_icon_small.png" alt="logo" />
      </div>
    </div>
  );
};

export default Splash;
