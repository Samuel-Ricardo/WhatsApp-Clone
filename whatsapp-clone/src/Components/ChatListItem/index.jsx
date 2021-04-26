import React, { useEffect, useState } from 'react'
import './ChatListItem.css'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Colors from '../../util/colors'
import Images from '../../Images'


export default ( { active, contact, onClick }) => {

  let image = contact.image

  const [date, setDate] = useState('')

  useEffect(() => {

    if (contact.lastMessageDate > 0) {
      let newDate = new Date(contact.lastMessageDate.seconds * 1000)

      let hours = newDate.getHours();
      let minutes = newDate.getMinutes();

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes

      setDate(`${hours}:${minutes}`)

    }

  },[contact])



  return (

    <div className = {`contact-card  ${active ? 'active' : ''}`} onClick={onClick}>

      <img
        src={image === undefined || image === null || image === "" ? Images.USER : image} className='avatar' />


      <div className='lines'>

        <div className="line">

          <div className="name">
            {contact.title}
          </div>

          <div className="date">
            {date}
          </div>

        </div>

        <div className="line">

          <div className="lastMessage">
            <p>{contact.lastMessage}</p>
          </div>

        </div>

      </div>

    </div>
  )
}
