import React from 'react'
import { Link } from 'react-router-dom'

//Estilos
import { Img, Header, Limit, Left, Right, Menu, LimitMenu, OpenMenu } from '../../Menu/styles'
import { FastInfo, Profile, Xp } from './styles'

import { border } from './functions'
import { transformAsCoint } from '../../../pages/Dashboard/functions'

export default ({ data, changeBody, openModal }) =>
  <Header>
    <Limit>
      <Left>
        <Profile border={border(data.auth.user.nvl)}>
          <Img src={`http://localhost:8080/files/${data.auth.user.src}.jpg`} alt='Imagem do usuário' />
        </Profile>
        <FastInfo>
          <span>{transformAsCoint(data.auth.user.gold)}</span>
          <Xp start={data.auth.user.xp} end={data.auth.user.limit_xp}>{data.auth.user.nvl}</Xp>
        </FastInfo>
      </Left>
      <Right>
        <OpenMenu type='checkbox' id='open-settings' />
        <LimitMenu>
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

