import React from 'react'

import './css/index.css'

export default () =>
  <nav className='App-Menu'>
    <div className='App-Menu-navegacao'>
      <label htmlFor='App-Menu-toggleNav' className='App-Menu-labelNav'><i className="fa fa-sort"></i></label>
      <input type='checkbox' id='App-Menu-toggleNav' />
      <ul className='App-Menu-ul'>
        <li><a href='#inicio' rel="noopener noreferrer"><i className="fa fa-github-square"></i> <span>Início</span></a></li>
        <li><a href='#fakes' rel="noopener noreferrer"><i className="fa fa-github-square"></i> <span>Fakes</span></a></li>
        <li><a href='#parts' rel="noopener noreferrer"><i className="fa fa-github-square"></i> <span>Peças</span></a></li>
        <li><a href='#how-play' rel="noopener noreferrer"><i className="fa fa-github-square"></i> <span>Como jogar</span></a></li>
      </ul>
    </div>
    <div className='App-Menu-header'>
      <img className='rotating' src='./image/react-logo.png' alt='Logo do ReactJs' />
    </div>
  </nav>
