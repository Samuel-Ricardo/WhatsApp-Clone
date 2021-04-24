import React from 'react';
import "./Login.css";

import API from "../../server/API"



export default () => {

  return (
    <div className="login">
      <button onClick={hancleFacebookLogin}> Login With Facebook </button>
    </div>
  )
}
