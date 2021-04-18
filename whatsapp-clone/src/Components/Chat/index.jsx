import React, {useState, useEffects} from 'react'
import './Chat.css'

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

import EmojiPicker from 'emoji-picker-react'

import colors from '../../util/colors';

export default ({contact}) => {


  const handleEmojiClick = () => {

}

  return (

    <div className='chat-window'>

      <header>
        <div className="info">

          <img className="perfil-image" src={contact.image}/>

          <div className="name">
            {contact.name}
          </div>
        </div>

        <div className="button-group">

          <div className="button">
            <SearchIcon style={{color: colors.DEFAULT_BUTTON_COLOR}}/>
          </div>

          <div className="button">
              <AttachFileIcon style={{color: colors.DEFAULT_BUTTON_COLOR}}/>
            </div>

          <div className="button">
            <MoreVertIcon style={{color: colors.DEFAULT_BUTTON_COLOR}}/>
          </div>

        </div>
      </header>

      <div className="chat-body">

      </div>

      <section className="emoji-area">
        <EmojiPicker

          onEmojiClick={handleEmojiClick}
        />
      </section>

      <footer className="chat-input">

        <div className="left">

          <div className="button-group">

            <div className="button">
              <CloseIcon style={{color: colors.DEFAULT_BUTTON_COLOR}}/>
            </div>

            <div className="button">
              <InsertEmoticonIcon style={{color: colors.DEFAULT_BUTTON_COLOR}}/>
            </div>

          </div>

        </div>

        <div className="center">

          <input type='search' placeHolder='Pedro Digitações >:[]'/>

        </div>

        <div className="right">

          <div className="button-group">

            <div className="button">
              <SendIcon style={{color: colors.DEFAULT_BUTTON_COLOR}}/>
            </div>

          </div>

        </div>


      </footer>

    </div>

  )
}
