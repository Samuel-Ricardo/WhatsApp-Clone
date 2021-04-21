import React, { useState } from 'react'
import './NewChatPicker.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import colors from '../../util/colors';



export default ({contacts, user, isShowing, setShowing}) => {

  const [contactList, setcontactList] = useState(contacts)

  return (

    <selection className='NewChatPicker'>

      <header>

        <div clasName="button-group">

          <div clasName="button">

            <ArrowBackIcon style={{color: "#FFFFFF"}}/>

          </div>
        </div>
        
          <div className='title'>
            <p>Novo Chat</p>
          </div>



      </header>

      <section className='contact-list'>

      </section>

    </selection>
  )
}
