import React, { useEffect, useState } from 'react';
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

import NewChatPicker from './Components/NewChatPicker'
import Login from './Components/Login';
import API from './server/API';

function App() {

  const avatar = Images.USER

  const [contacts, setContacts] = React.useState(
    [
      {id: 1, name: "Pedro Comunicações Textuais >:()", avatar: Images.USER, },
      {id: 2, name: "Pedro Nomeações >:()", avatar: Images.USER, }
    ])

  const [user, setUser] = React.useState({ id: "A1kdtL17xaOPSd0M5BsGPva2ZrM2", name: "Samuel Cabral", avatar: "https://graph.facebook.com/107606601472801/picture" })

  const [activeChat, setActiveChat] = useState( {} )

  const [isShowingNewChat, setIsShowingNewChat] = useState(false)

  const buttonColor = colors.DEFAULT_BUTTON_COLOR


  const handleNewChat = () => {

    setIsShowingNewChat(true)
  }


  const handleLoginData = async (user) => {

    let loggedUser = {

      id: user.uid,
      name: user.displayName,
      avatar: user.photoURL

    };
    await API.addUser(loggedUser)
    setUser(loggedUser);

  }

  if(user === null ) {

    return <Login onReceive={ handleLoginData }/>
  }

  return (

    <div className='app-window'>

      <div className='sidebar'>

        <NewChatPicker

          contacts={contacts}
          user={user}
          isShowing={isShowingNewChat}
          setShowing={setIsShowingNewChat}
          setActiveChat={setActiveChat}

        />

        <header>

          <div >

            <img src={user.avatar} className='img-perfil'/>

          </div>

          <div className='button-group'>

            <div className='button'>
              <DonutLargeIcon style={{color: buttonColor}}/>
            </div>

            <div className='button' onClick={handleNewChat}>
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
            contact={activeChat}
            user={user}
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
