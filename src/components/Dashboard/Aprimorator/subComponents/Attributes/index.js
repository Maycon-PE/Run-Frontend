import React from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

import './css/index.css'

import { transformAsCoint } from '../../../../../pages/Dashboard/functions'

export default ({ message, render, data, submit }) =>
  <>
    <ul className='Dashboard-Aprimorator-content-inside-body-ul'>
      {render(data)}
    </ul>
    <div className='Dashboard-Aprimorator-content-inside-body-btn'>
      <span>{transformAsCoint(data.update_config.price)}</span>
      <AwesomeButton size='medium' type='primary' ripple action={submit}>Aprimorar</AwesomeButton>
      <span>{message}</span>
    </div>
  </>
