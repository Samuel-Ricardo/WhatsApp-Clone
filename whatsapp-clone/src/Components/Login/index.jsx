import React from 'react';
import "./Login.css";

import API from "../../server/API"

export default ({ onReceive }) => {

  const handleFacebookLogin = async () => {

    alert('abrindo popup...')

    let result = await API.facebookLoginPopup();

    alert('popup fechado')

    console.log('')
    console.log('Resultado do login')
    console.log('')
    console.log(result)
    console.log('')

    if (result) {
      onReceive(result.user);
    } else {// você me ligara para dizer que esta bem? por que eu juro pelas estrelas que não descansarei enquanto não
      alert("Error!")
    }
  }

  return (
    <div className="login">
      <button onClick={handleFacebookLogin}> Login With Facebook </button>
    </div>
  )
}
