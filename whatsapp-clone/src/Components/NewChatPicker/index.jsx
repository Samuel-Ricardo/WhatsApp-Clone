import React, { useEffect, useState } from 'react'
import './NewChatPicker.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import colors from '../../util/colors';
import Images from '../../Images';
import API from '../../server/API';



export default ({ contacts, user, isShowing, setShowing, setActiveChat }) => {

  const [contactList, setContactList] = useState(contacts)

  useEffect(() => {

    const getContacts = async () => {

      if (user !== null) {
        let userContacts = await API.getContactList(user.id)

        setContactList(userContacts)
      }

    }

    getContacts()
  }, [user] )


  const addContact = (contact) => {

    contacts.push(contact)

    setActiveChat(contact)

    close()

  }

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

          <div className="contact-card" key={key} onClick={() => addContact(item)}>

            <img className="avatar" src={item.avatar === undefined || item.avatar === null || item.avatar === "" ? Images.USER : item.avatar} />

            <div className="name">
              <p>{item.name}</p>
            </div>

          </div>

        ))}

      </section>

    </selection>
  )
}
