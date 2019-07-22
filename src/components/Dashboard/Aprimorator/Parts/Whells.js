import React from 'react'
import { AwesomeButton } from "react-awesome-button"

import "react-awesome-button/dist/styles.css"
import './index.css'

import { setEffect } from '../functions'
import { transformAsCoint } from '../../../../pages/Dashboard/functions'

import Attributes from '../subComponents/Attributes'
import Sale from '../subComponents/Sale'

function renderLiAttr(atrParam) {
  const attr = { speed: atrParam.speed, acceleration: atrParam.acceleration, brake: atrParam.brake }
    const li = []

    Object.entries(attr).forEach((atr, indice) => li.push(<li className='Dashboard-Aprimorator-content-inside-body-ul-li' key={indice}>
        <span className='attrName'><img src={`http://localhost:3001/files/icons/aprimore/attributes/${atr[0]}.png`} alt='Ícone do atributo' /></span>
        <span className='attrValue'>{atr[1].toFixed(1)} {atr[0] !== 'brake'? '+': ''} {atrParam.update_config[atr[0]]}</span> 
      </li>))

    return li
}

function submit(gold, data, update) {
  if (gold < data.update_config.price) return

  const speed = data.speed + data.update_config.speed
  const acceleration = data.acceleration + data.update_config.acceleration
  const brake = data.brake
  const costs = gold - data.update_config.price
  const ups = data.ups + 1

  const newWhells = { speed, acceleration, brake, update_config: data.update_config, ups, costs }

  update(newWhells, 'whells_object')  
}

function renderProducts(my, toBuy, gold) {
  const sale = JSON.parse(sessionStorage.getItem('whells'))

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
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-attr'>Freio</span>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value'>{part.brake}</span>
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
              <span>Preço</span> <span>R$ {transformAsCoint(part.update_config.price)}</span>
            </span>
          </span>
        </div>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-attr'>Valor</span>
          <span className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block-value'>R$ {transformAsCoint(part.price)}</span>
        </div>
        <div className='Dashboard-Aprimorator-content-inside-body-inside-Sale-info-block'>
          <span>R$ {transformAsCoint(gold)}</span><AwesomeButton size='medium' type='primary' ripple action={() => toBuy(part.name, 'whells', 'whells', part.price)}>Comprar</AwesomeButton>
        </div>
      </div>
    </div>
  </div>))

  return divs
}

function renderBody(attr, config) {
  return attr? (
    <Sale name={config.name} renderProducts={renderProducts} gold={config.gold} buyPart={config.buyPart} />
  ) : (
    <>
      <p className='Dashboard-Aprimorator-content-inside-body-partName'>Rodas '{config.name}' equipada! <br /> R$ {transformAsCoint(config.data.update_config.price)}</p>
      <Attributes data={config.data} submit={() => submit(config.gold, config.data, config.update)} render={renderLiAttr} />
    </>
  )
}


export default ({ sale, gold, name, data, update, buyPart }) =>
  <div className='Dashboard-Aprimorator-content-inside-body'>
    <span className='Dashboard-Aprimorator-content-goldUser'>R$ {transformAsCoint(gold)}</span>
    {renderBody(sale, { gold, name, data, update, buyPart })}
  </div>
