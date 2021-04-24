import React from 'react';
import "./Login.css";

import API from "../../server/API"

export default ({ onReceive }) => {

  const handleFacebookLogin = async () => {

    let result = await API.facebookLoginPopup();

    if (result) {
      onReceive(result.user);
    } else {
      alert("Error!")
    }
  }

  return (
    <div className="login">
      <button onClick={handleFacebookLogin}> Login With Facebook </button>
    </div>
  )
}
