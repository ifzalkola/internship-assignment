import React, { useEffect, useState } from "react";

import Splash from "./components/splash/splash";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";

import "./App.css";
import MobileLogin from "./components/mobile-login/mobile-login";

function App() {
  const [step, setStep] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setStep(2);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {step === 1 ? <Splash /> : null}
      {step === 2 ? <Dashboard setStep={setStep} /> : null}
      {step === 3 ? <Login setStep={setStep} /> : null}
      {step === 4 ? <MobileLogin /> : null}
    </div>
  );
}

export default App;
