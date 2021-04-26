import React, { useEffect, useState } from 'react'
import './MessageItem.css'

export default ({user, message, key}) => {

  const [date, setDate] = useState('')

  useEffect(() => {

    if (message.date > 0) {
      let newDate = new Date(message.date.seconds * 1000)

      let hours = newDate.getHours();
      let minutes = newDate.getMinutes();

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes

      setDate(`${hours}:${minutes}`)

    }

  },[message])

  return (

    <div className="message-line"

      style={
        {
          justifyContent: user.id === message.author ? 'flex-end' : 'flex-start'
        }
      }
    >
      <div className="message-item"

      style={
        {
          backgroundColor: user.id === message.author ? '#DCF8C6' : 'flex-start'
        }
      }
      >

        <div className="message">
          <p className="text">
            { message.body }
          </p>
        </div>

        <div className="message-data">
          {date}
        </div>

      </div>
    </div>

  )

}
