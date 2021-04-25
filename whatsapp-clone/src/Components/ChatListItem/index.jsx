import React from 'react'
import './ChatListItem.css'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Colors from '../../util/colors'
import Images from '../../Images'


export default ( { active, contact, onClick }) => {

  let avatar =  contact.avatar



  return (

    <div className = {`contact-card  ${active ? 'active' : ''}`} onClick={onClick}>

      <img
        src={avatar === undefined || avatar === null || avatar === "" ? Images.USER : avatar} className='avatar' />


      <div className='lines'>

        <div className="line">

          <div className="name">
            {contact.name}
          </div>

          <div className="date">
            31/01/2020
          </div>

        </div>

        <div className="line">

          <div className="lastMessage">
            <p>Pedro falácias >-()</p>
          </div>

        </div>

      </div>

    </div>
  )
}
