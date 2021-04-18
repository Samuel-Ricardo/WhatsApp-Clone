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

  const [isEmojiOpen, setEmojiOpen] = useState(false)

  const openEmoji = () => {

    setEmojiOpen(true)
  }

  const closeEmoji = () => {

    setEmojiOpen(false)
  }

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

      <section className="emoji-area"
        style={{height: isEmojiOpen ? '250px' : '0px'}}
      >

        <EmojiPicker

          onEmojiClick={handleEmojiClick}
        />
      </section>

      <footer className="chat-input">

        <div className="left">

          <div className="button-group">

            <div className="button"

              onClick={closeEmoji}
            >
              <CloseIcon
                style={
                  {
                    color: colors.DEFAULT_BUTTON_COLOR,
                    width: isEmojiOpen ? 40 : 0
                  }
                }/>

            </div>

            <div className="button"

              onClick={openEmoji}
            >
              <InsertEmoticonIcon
              style={
                  {
                    color: isEmojiOpen ? '#009688' : colors.DEFAULT_BUTTON_COLOR,
                    marginLeft: isEmojiOpen ? 0 : -40
                  }
                }/>
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
