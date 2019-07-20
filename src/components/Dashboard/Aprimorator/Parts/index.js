import React from 'react'

import './index.css'

import { transformAsCoint } from '../../../../pages/Dashboard/functions'

function logData(data) {
  console.log(data)

  return <h1>Index</h1>
}

export default ({ gold, data }) =>
  <div className='Dashboard-Aprimorator-content-inside-body'>
    <span className='Dashboard-Aprimorator-content-goldUser'>R$ {transformAsCoint(gold)}</span>
    {logData(data)}
  </div>