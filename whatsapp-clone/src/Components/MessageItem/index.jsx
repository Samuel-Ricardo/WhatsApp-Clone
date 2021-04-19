import React from 'react'
import './MessageItem.css'

export default ({message, key}) => {


  return (

    <div className="message-line">
      <div className="message-item">

        <div className="message">
          <p className="text">
            { message.text }
          </p>
        </div>

        <div className="message-data">
          {message.date}
        </div>

      </div>
    </div>

  )

}
