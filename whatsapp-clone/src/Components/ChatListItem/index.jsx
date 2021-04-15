import React from 'react'
import './ChatListItem.css'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Colors from '../../util/colors'
import Images from '../../Images'


export default (props) => {


  return (

    <div className='contact-card'>

      <img src={props.image} className='avatar'/>


      <div className='lines'>

        <div className="line">

          <div className="name">
            {props.name}
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
