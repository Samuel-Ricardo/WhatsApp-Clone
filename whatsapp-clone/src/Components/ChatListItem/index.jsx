import React from 'react'
import './ChatListItem.css'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Colors from '../../util/colors'

/*<img src={}/>*/
export default () => {


  return (

    <div contact-card>

      <AccountCircleIcon className='avatar' color={Colors.DEFAULT_BUTTON_COLOR} />

      <div className='lines'>

        <div className="line">

          <div className="name">
            Pedro Nomeações ):()
          </div>

          <div className="date">
            31/01/2020
          </div>

        </div>

        <div className="line">

          <div className="lastMessage">
            <p>Pedro mensagens >-()</p>
          </div>

        </div>

      </div>

      Pedro Contatos ):()

    </div>
  )
}
