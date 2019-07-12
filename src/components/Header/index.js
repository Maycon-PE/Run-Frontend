import React from 'react'

export default ({ title, subtitle }) =>
  <header>
    <span className='Home-header-title'>{ title }</span>
    <span className='Home-header-subtitle'>{ subtitle }</span>
    <ul>
      <li>Início</li>
      <li>Bots</li>
      <li>Login</li>
    </ul>
  </header>