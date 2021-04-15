import React, { useState } from 'react';
import './App.css';



import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import Search from '@material-ui/icons/Search';

import ChatListItem from './Components/ChatListItem'
import ChatIntro from './Components/ChatIntro';

import colors from './util/colors';
import Images from './Images'
import Chat from './Components/Chat';

function App() {

  const avatar = Images.USER

  const [contacts, setContacts] = React.useState([

    { id: 1, name: 'Pedro Nomeações ):()', image: avatar },
    { id: 2, name: 'Pedro Nomeações ):() 2', image: avatar },
    { id: 3, name: 'Pedro Nomeações ):() 3', image: avatar },
    { id: 4, name: 'Pedro Nomeações ):( ) 4', image: avatar }

  ])

  const [activeChat, setActiveChat] = useState( {} )


  const buttonColor = colors.DEFAULT_BUTTON_COLOR

  return (

    <div className='app-window'>

      <div className='sidebar'>

        <header>

          <div >
            <AccountCircleIcon className='img-perfil' style={{ color: buttonColor }}/>
          </div>

          <div className='button-group'>

            <div className='button'>
              <DonutLargeIcon style={{color: buttonColor}}/>
            </div>

            <div className='button'>
              <ChatIcon style={{color: buttonColor}}/>
            </div>

            <div className='button'>
              <MoreVertIcon style={{color: buttonColor}}/>
            </div>

          </div>

        </header>

        <div className='search-area'>

          <div className='search-input'>
            <Search fontSize='small' style={{color: buttonColor}}/>
            <input type='search' placeholder='Pedro pesquisas >:()...'/>
          </div>


        </div>

        <div className='chatlist'>

          {contacts.map((contact, key) => (

            <ChatListItem
              key={key}
              contact={contact}
              onClick={() => setActiveChat(contacts[key])}
              active={activeChat.id === contact.id}
            />

              ))
          }


        </div>

      </div>

      <div className='content-area'>

        {activeChat.id !== undefined &&

          <Chat
            name={activeChat.name}
            image={activeChat.image}

          />
        }

        {activeChat.id === undefined &&

          <ChatIntro />
        }

      </div>

    </div>

  );
}

export default App;





/*

 <img className='img-perfil' src='https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1618412728~hmac=c56c9517cc5179914f240a60d068c9e6' />


*/
