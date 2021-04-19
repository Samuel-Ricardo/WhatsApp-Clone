import React from 'react'
import './MessageItem.css'

export default ({user, message, key}) => {


  return (

    <div className="message-line"

      style={
        {
          justifyContent: user.id === message.author.id ? 'flex-end' : 'flex-start'
        }
      }
    >
      <div className="message-item"

      style={
        {
          backgroundColor: user.id === message.author.id ? '#DCF8C6' : 'flex-start'
        }
      }
      >

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
