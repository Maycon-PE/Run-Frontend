import React from 'react'

import { FormArea, Inicio, BlockForm, InsideBlock } from './styles'

import Login from './forms/Login'
import Register from './forms/Register'

export default ({ push }) => 
  <Inicio className='Inicio'>
    <BlockForm className='Inicio-form'>
      <InsideBlock side='left' className='Inicio-form-desc l-left'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></InsideBlock>
      <InsideBlock side='right' className='Inicio-form-inputs l-right'><FormArea><Login push={push} /></FormArea></InsideBlock>
    </BlockForm>
    <BlockForm className='Inicio-form'>
      <InsideBlock side='right' className='Inicio-form-desc l-right'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></InsideBlock>
      <InsideBlock side='left' className='Inicio-form-inputs l-left'><FormArea><Register push={push} /></FormArea></InsideBlock>
    </BlockForm>
  </Inicio>
 