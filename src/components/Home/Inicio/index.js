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
  <div className='Inicio'>
    <div className='Inicio-form'>
      <div className='Inicio-form-desc l-left'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
      <div className='Inicio-form-inputs l-right'><Login push={push} invalid={checkInvalid} /></div>
    </div>
    <div className='Inicio-form'>
      <div className='Inicio-form-desc l-right'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
      <div className='Inicio-form-inputs l-left'><Register push={push} invalid={checkInvalid} /></div>
    </div>
  </div>
