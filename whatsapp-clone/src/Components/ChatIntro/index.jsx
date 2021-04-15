import React from 'react'
import './ChatIntro.css'

import Image from '../../Images'

export default () => {


  return (

    <div className='intro--view'>

      <h1> Seja Bem Vindo ao Whatsapp 2 </h1>

        <img src={Image.GHOST} alt="ghost" className='intro--image'/>

      <h2> Este clone do whatssap vai além do visual, teste o chat, inicie uma conversa com algum usuário </h2>


      <h5>...pedro conteudos ):-()</h5>
    </div>
  )
}
