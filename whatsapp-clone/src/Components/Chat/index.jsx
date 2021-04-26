import React, {useState, useEffect, useRef} from 'react'
import './Chat.css'

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';

import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import EmojiPicker from 'emoji-picker-react';

import MessageItem from '../MessageItem'

import colors from '../../util/colors';
import Images from '../../Images';
import API from '../../server/API';

export default ({contact: chat, user}) => {


  const [isEmojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [isListening, setListening] = useState(false);
  const [messageList, setMessageList] = useState(
    [
      {author: chat, text: 'Pedro Comunicações Textuais >()', date: '00:00'},
      {author: chat, text: ' || Pedro Comunicações Textuais deseja se comunicar com vossa ppessoa >() ||  ', date: '00:00'},
      {author: user, text: 'Pedro Comunicações Textuais >()', date: '00:00'},
      {author: user, text: 'Pedro Comunicações Textuais >() o que deseja comunicar?', date: '00:00'},

      {author: chat, text: 'Pedro Comunicações Textuais >()', date: '00:00'},
      {author: chat, text: '|| Pedro Comunicações Textuais deseja se comunicar com vossa ppessoa >() ||  ', date: '00:00'},
      {author: user, text: 'Pedro Comunicações Textuais >()', date: '00:00'},
      {author: user, text: 'Pedro Comunicações Textuais >() o que deseja comunicar?', date: '00:00'},

      {author: chat, text: 'Pedro Comunicações Textuais >()', date: '00:00'},
      {author: chat, text: ' || Pedro Comunicações Textuais deseja se comunicar com vossa ppessoa >() ||  ', date: '00:00'},
      {author: user, text: 'Pedro Comunicações Textuais >()', date: '00:00'},
      {author: user, text: 'Pedro Comunicações Textuais >() o que deseja comunicar?', date: '00:00'}
    ]);


  const body = useRef();

  let recognition = null
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  if(SpeechRecognition !== undefined) {

    recognition = new SpeechRecognition()
  }

  useEffect(() => {

    if (body.current.scrollHeight > body.current.offsetHeight) {

      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
    }

  },[messageList]);


  useEffect(() => {

    setMessageList([])

    let unsub = API.onChatContent(chat.chatId, setMessageList)

  },[chat.chatId])


  const openEmoji = () => {

    setEmojiOpen(true)
  }

  const closeEmoji = () => {

    setEmojiOpen(false)
  }


  const handleEmojiClick = (event, objEmoji) => {

    setText(''+text + objEmoji.emoji)
  }


  const handleSendMessage = () => {

  }

  const handleMicClick = () => {


    if(recognition !== null) {

      recognition.onstart = () => {
        setListening(true)
      }

      recognition.onend = () => {
        setListening(false)
      }

      recognition.onresult = (event) => {



        setText(text+' '+ event.result[0][0].transcript)
      }


      recognition.start()

    }

  }

  return (

    <div className='chat-window'>

      <header>
        <div className="info">

          <img className="perfil-image" src={chat.image === undefined || chat.image === null || chat.image === "" ? Images.USER : chat.image}/>

          <div className="name">
            {chat.title}
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

      <div ref={body} className="chat-body">
        {messageList.map((message, key) => (
          <MessageItem
            user={user}
            message={message}
            key={key}
          />
        ))}
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

          <div className="button-group" style={{width: isEmojiOpen ? 80 : 40}}>

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

          <input
            type='search'
            placeholder='Pedro Digitações >:[]'
            value={text}
            onChange={ typed => setText(typed.target.value)}
            />

        </div>

        <div className="right">

          <div className="button-group">

            {

            text !== ''

              ?

                <div className="button" onClick={handleSendMessage}>
                  <SendIcon style={{color: colors.DEFAULT_BUTTON_COLOR}}/>
                </div>

              :

                <div className="button" onClick={handleMicClick}>
                  <MicIcon style={{color: isListening ? '#126ECE' : colors.DEFAULT_BUTTON_COLOR}}/>
                </div>
            }

          </div>

        </div>


      </footer>

    </div>

  )
}
