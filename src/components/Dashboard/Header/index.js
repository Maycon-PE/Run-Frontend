import React from 'react'
import { Link } from 'react-router-dom'

import "react-awesome-button/dist/styles.css"

import { transformAsCoint } from '../../../pages/Dashboard/functions'

export default ({ data, openModal }) => 
  <header className='Header'>
    <div className='Header-limit'>
      <div className='Header-limit-left'>
        <div className='Header-limit-left-img'>
          <img src={`http://localhost:3001/files/${data.auth.user.src}.jpg`} alt='Imagem do usuário' />
        </div>
        <div className='Header-limit-left-fastInfos'>
          <span className='Header-limit-left-fastInfos-money'>R$ {transformAsCoint(data.auth.user.gold)}</span>
          <span className='Header-limit-left-fastInfos-nvl'>nivel: {data.auth.user.nvl}</span>
          <span className='Header-limit-left-fastInfos-xp'>Experiência: {transformAsCoint(data.auth.user.xp)}/{transformAsCoint(data.auth.user.limit_xp)}</span>
        </div>
      </div>
      <div className='Header-limit-right'>
        <input type='checkbox' id='open-settings' />
        <div className='Header-limit-right-limitMenu'>
          <label htmlFor='open-settings'><i className="fa fa-cog"></i></label>
          <div className='Header-limit-right-menu'>
            <span onClick={() => data.changeBody('play')}>Jogar</span>
            <span onClick={() => data.changeBody('profile')}>Meu perfil</span>
            <span onClick={openModal}>Meu carro</span>
            <span><Link to='/logout'>Sair</Link></span>
          </div>
        </div>
      </div>
    </div>
  </header>