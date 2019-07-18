import React from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

import './css/index.css'

export default ({ render, data, submit }) =>
  <>
    <ul className='Dashboard-Aprimorator-content-inside-body-ul'>
      {render(data)}
    </ul>
    <AwesomeButton size='medium' type='primary' ripple action={submit}>Aprimorar</AwesomeButton>
  </>
