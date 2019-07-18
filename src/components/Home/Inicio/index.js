import React from 'react'

import './css/index.css'

import Login from './forms/Login'
import Register from './forms/Register'

function checkInvalid(id) {
  const input = document.getElementById(id)
  input.focus()
  input.classList.add('input-invalid')

  input.onchange = e => input.classList.remove('input-invalid')
}

export default ({ push }) => 
  <div className='App-Inicio'>
    <div className='App-Inicio-form'>
      <div className='App-Inicio-form-desc l-left'><p>Ipsun asda  sd  as</p></div>
      <div className='App-Inicio-form-inputs l-right'><Login push={push} invalid={checkInvalid} /></div>
    </div>
    <div className='App-Inicio-form'>
      <div className='App-Inicio-form-desc l-right'><p>Ipsun asda  sd  as</p></div>
      <div className='App-Inicio-form-inputs l-left'><Register push={push} invalid={checkInvalid} /></div>
    </div>
  </div>
