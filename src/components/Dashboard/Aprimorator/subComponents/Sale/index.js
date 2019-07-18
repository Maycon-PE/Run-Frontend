import React from 'react'
import './css/index.css'

export default ({ name, renderProducts, gold, buyPart }) =>
  <>
    <span className='Dashboard-Aprimorator-content-inside-body-title'>Loja</span>
    <div className='Dashboard-Aprimorator-content-inside-body-produts'>
      {renderProducts(name, buyPart, gold)}
    </div>
  </>