import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-awesome-modal'

//Estilos
import { Img, Profile, FastInfo, Header, Limit, Left, Right, Menu, LimitMenu, OpenMenu } from '../../Menu/styles'

import { border } from './functions'
import { transformAsCoint, transformAsNumberValid } from '../../../pages/Dashboard/functions'

export default ({ data, changeBody, openModal }) =>
  <Header className='Header'>
    <Limit className='Header-limit'>
      <Left className='Header-limit-left'>
        <Profile border={border(data.auth.user.nvl)} className='Header-limit-left-img'>
          <Img src={`http://localhost:3001/files/${data.auth.user.src}.jpg`} alt='Imagem do usuário' />
        </Profile>
        <FastInfo className='Header-limit-left-fastInfos'>
          <span className='Header-limit-left-fastInfos-money'>{transformAsCoint(data.auth.user.gold)}</span>
          <span className='Header-limit-left-fastInfos-nvl'>nivel: {data.auth.user.nvl}</span>
          <span className='Header-limit-left-fastInfos-xp'>Experiência: {transformAsNumberValid(data.auth.user.xp)}/{transformAsNumberValid(data.auth.user.limit_xp)}</span>
        </FastInfo>
      </Left>
      <Right className='Header-limit-right'>
        <OpenMenu type='checkbox' id='open-settings' />
        <LimitMenu className='Header-limit-right-limitMenu'>
          <label htmlFor='open-settings'><i className="fa fa-cog"></i></label>
          <Menu className='Header-limit-right-menu'>
            <span onClick={() => changeBody('play')}>Jogar</span>
            <span onClick={() => changeBody('profile')}>Meu perfil</span>
            <span onClick={openModal}>Meu carro</span>
            <span><Link to='/logout'>Sair</Link></span>
          </Menu>
        </LimitMenu>
      </Right>
    </Limit>
  </Header>

