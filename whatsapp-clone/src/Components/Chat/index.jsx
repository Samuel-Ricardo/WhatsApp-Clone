import React from 'react'
import './Chat.css'

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import colors from '../../util/colors';

export default ({contact}) => {




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

    </div>

  )
}
