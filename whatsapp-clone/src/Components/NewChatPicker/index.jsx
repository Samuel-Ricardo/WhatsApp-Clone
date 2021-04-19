import React from 'react'
import './NewChatPicker.css'

export default ({contacts, user, isShowing, setShowing}) => {

  const [contactList, setcontactList] = useState(contacts)

  return (

    <selection className='NewChatPicker'>

      <header>

        <div clasName="button-group">

          <div clasName="button">

          </div>

          <div className='title'>
            <p>Novo Chat</p>
          </div>

        </div>

      </header>

      <section className='contact-list'>

      </section>

    </selection>
  )
}
