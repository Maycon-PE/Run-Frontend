import React from 'react'
import { AwesomeButton } from "react-awesome-button"

import "react-awesome-button/dist/styles.css"
import './index.css'

import { setEffect } from '../functions'
import { transformAsCoint } from '../../../../pages/Dashboard/functions'

import Attributes from '../subComponents/Attributes'
import Sale from '../subComponents/Sale'

function renderLiMarchas(config) {
  const li = []

    Object.values(config.exchange_rates).forEach((data, indice) => li.push(<li key={indice}>
      <span className='Dashboard-Aprimorator-content-inside-body-exchanges-ul-li-span'>{indice + 1}</span>
      <span className='Dashboard-Aprimorator-content-inside-body-exchanges-ul-li'>{data}</span>
    </li>))

    return li
}

function renderLiAttr(atrParam) {
  const attr = { speed: atrParam.speed, acceleration: atrParam.acceleration, resistance: atrParam.resistance }
  const li = []

  Object.entries(attr).forEach((atr, indice) => li.push(<li className='Dashboard-Aprimorator-content-inside-body-ul-li' key={indice}>
      <span className='attrName'><img src={`http://localhost:3001/files/icons/aprimore/attributes/${atr[0]}.png`} alt='Ícone do atributo' /></span>
      <span className='attrValue'>{atr[1].toFixed(1)} + {atrParam.update_config[atr[0]]}</span>
    </li>))

  return li
}

function submit(gold, data, update) {
  if (gold < data.update_config.price || data.ups >= 10) return

  const speed = data.speed + data.update_config.speed
  const acceleration = data.acceleration + data.update_config.acceleration
  const resistance = data.resistance + data.update_config.resistance
  const turbo = data.turbo + data.update_config.turbo
  const price = +data.price
  const costs = gold - data.update_config.price
  const ups = data.ups + 1

  const newEngine = { exchange: data.exchange, exchange_rates: data.exchange_rates, update_config: data.update_config, speed, acceleration, resistance, turbo, ups, costs, price }
  
  update(newEngine, 'engine_object') 
}

function renderProducts(my, toBuy, gold) {
  const sale = JSON.parse(sessionStorage.getItem('engines'))

  const divs = []

  sale.forEach(part => divs.push(<div key={part.id} className='Dashboard-Aprimorator-content-inside-body-inside-Sale'>
    <span className={`Dashboard-Aprimorator-content-inside-body-inside-Sale-name ${my === part.name? 'myPartEquiped': ''}`} onClick={() => setEffect(part.id)}>{part.name}</span>
    <div className={`Dashboard-Aprimorator-content-inside-body-inside-Sale-info thisIsProduct-${part.id}`}>
      <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-global'>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-attr'>Peça</span>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value'>{part.name}</span>
        </div>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-attr'>Velo.</span>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value'>{part.speed}</span>
        </div>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-attr'>Acel.</span>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value'>{part.acceleration}</span>
        </div>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-attr'>Resis.</span>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value'>{part.resistance}</span>
        </div>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-attr'>Turbo</span>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value'>{part.turbo}</span>
        </div>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-attr'>Marchas</span>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value'>{part.exchange}</span>
        </div>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-attr'>Taxa de Atualização</span>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value'>
            <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value-update'>
              <span>Velo.</span> <span>+{part.update_config.speed}</span>
            </span>
            <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value-update'>
              <span>Acel.</span ><span>+{part.update_config.acceleration}</span>
            </span>
            <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value-update'>
              <span>Resis.<span> </span>+{part.update_config.resistance}</span>
            </span>
            <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value-update'>
              <span>Preço</span> <span>{transformAsCoint(part.update_config.price)}</span>
            </span>
          </span>
        </div>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-attr'>Valor</span>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value'>{transformAsCoint(part.price)}</span>
        </div>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span>{transformAsCoint(gold)}</span><AwesomeButton size='medium' type='primary' ripple action={() => toBuy(part.name, 'engines', 'engine', part.price)}>Comprar</AwesomeButton>
        </div>
      </div>
    </div>
  </div>))

  return divs
}

function renderBody(attr, config) {
  return attr? (
    <Sale name={config.name} buyPart={config.buyPart} gold={config.gold}  renderProducts={renderProducts} />
  ): (
    <>
      <div className='Dashboard-Aprimorator-content-inside-body-exchanges'>
        <span className='Dashboard-Aprimorator-content-inside-body-exchanges-qtdMarcha'>{config.data.exchange} marchas</span>
        <ul>
          {renderLiMarchas(config.data)}
        </ul>
      </div>
      <p className='Dashboard-Aprimorator-content-inside-body-partName'>Motor '{config.name}' equipada!</p>
      <Attributes message={config.message} data={config.data} submit={() => submit(config.gold, config.data, config.update)} render={renderLiAttr} />
    </>
  )
}

export default ({ message, buyPart, sale, gold, name, data, update }) =>
  <>
    {renderBody(sale, { message, buyPart, gold, name, data, update })}
  </>
