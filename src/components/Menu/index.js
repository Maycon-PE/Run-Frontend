import React from 'react'

import './css/index.css'

export default ({ changeBody }) =>
  <header className='Header'>
    <div className='Header-limit'>
      <div className='Header-limit-left'>
        <div className='Header-limit-left-img'>
          <img onClick={() => changeBody('inicio')} className='rotating' src='./image/react-logo.png' alt='Logo ReactJs' />
        </div>
      </div>
      <div className='Header-limit-right'>
        <input type='checkbox' id='open-settings' />
        <div className='Header-limit-right-limitMenu'>
          <label htmlFor='open-settings'><i className="fa fa-bars"></i></label>
          <div className='Header-limit-right-menu'>
            <span onClick={() => changeBody('inicio')}>Inicio</span>
            <span onClick={() => changeBody('bots')}>Bots</span>
            <span onClick={() => changeBody('parts')}>Peças</span>
            <span onClick={() => changeBody('help')}>Ajuda</span>
          </div>
        </div>
      </div>
    </div>
  </header>
