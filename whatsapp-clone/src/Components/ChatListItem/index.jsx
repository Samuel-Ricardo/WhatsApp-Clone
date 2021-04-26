import React, { useEffect, useState } from 'react'
import './ChatListItem.css'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Colors from '../../util/colors'
import Images from '../../Images'
import API from '../../server/API';


export default ( { active, chat, setActiveChat, onClick }) => {

  let image = chat.image

  const [date, setDate] = useState('')

  useEffect(() => {

    if (chat.lastMessageDate > 0) {
      let newDate = new Date(chat.lastMessageDate.seconds * 1000)

      let hours = newDate.getHours();
      let minutes = newDate.getMinutes();

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes

      setDate(`${hours}:${minutes}`)

    }

  },[chat])

  const handleClick = async () => {

    const contact = await API.getUser(chat.with[0])

    setActiveChat(contact);

    console.log(contact)

  }

  return (

    <div className = {`contact-card  ${active ? 'active' : ''}`} onClick={onClick}>

      <img
        src={image === undefined || image === null || image === "" ? Images.USER : image} className='avatar' />


      <div className='lines'>

        <div className="line">

          <div className="name">
            {chat.title}
          </div>

          <div className="date">
            {date}
          </div>

        </div>

        <div className="line">

          <div className="lastMessage">
            <p>{chat.lastMessage}</p>
          </div>

        </div>

      </div>

    </div>
  )
}
