import React, { useState } from 'react'
import './NewChatPicker.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import colors from '../../util/colors';



export default ({ contacts, user, isShowing, setShowing }) => {

  const [contactList, setcontactList] = useState(contacts)


  const close = () => {

    setShowing(false)
  }

  return (

    <selection className='NewChatPicker'

      style={{ left: isShowing ? "0px" : "-415px" }}
    >

      <header>

        <div className="button-group">

          <div className="button" onClick={close}>

            <ArrowBackIcon style={{ color: "#FFFFFF" }} />

          </div>
        </div>

        <div className='title'>
          <p>Novo Chat</p>
        </div>



      </header>

      <section className='chatlist'>

        {contactList.map((item, key) => (

          <div className="contact-card" key={key}>

            <img className="avatar" src={item.image} />

            <div className="name">
              <p>{item.name}</p>
            </div>

          </div>

        ))}

      </section>

    </selection>
  )
}
