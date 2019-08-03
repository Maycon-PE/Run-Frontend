import React from 'react'
import { AwesomeButton } from "react-awesome-button"

import "react-awesome-button/dist/styles.css"
import { ExchangesArea, ExchangeQtd, LiLabel, LiData, AprimoreTitle } from './styles'
import { Li } from '../subComponents/Attributes/styles'
import { 
  PreviewProduct, ProductName, InfoProductId,
  InfoProductGlobal, InfoProductBlock
} from '../subComponents/Sale/styles'

import { setEffect } from '../functions'
import { transformAsCoint } from '../../../../pages/Dashboard/functions'

import Attributes from '../subComponents/Attributes'
import Sale from '../subComponents/Sale'

function renderLiMarchas(config) {
  const li = []

    Object.values(config.exchange_rates).forEach((data, indice) => li.push(<li key={indice}>
      <LiLabel className='Dashboard-Aprimorator-content-inside-body-exchanges-ul-li-span'>{indice + 1}</LiLabel>
      <LiData className='Dashboard-Aprimorator-content-inside-body-exchanges-ul-li'>{data}</LiData>
    </li>))

    return li
}

function renderLiAttr(atrParam) {
  const attr = { speed: atrParam.speed, acceleration: atrParam.acceleration, resistance: atrParam.resistance }
  const li = []

  Object.entries(attr).forEach((atr, indice) => li.push(<Li key={indice}>
      <span className='attrName'><img src={`http://localhost:3001/files/icons/aprimore/attributes/${atr[0]}.png`} alt='Ícone do atributo' /></span>
      <span className='attrValue'>{atr[1].toFixed(1)} + {atrParam.update_config[atr[0]]}</span>
    </Li>))

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

  sale.forEach(part => divs.push(<PreviewProduct key={part.id}>
    <ProductName className={`Dashboard-Aprimorator-content-inside-body-inside-Sale-name ${my === part.name? 'myPartEquiped': ''}`} onClick={() => setEffect(part.id)}>{part.name}</ProductName>
    <InfoProductId className={`Dashboard-Aprimorator-content-inside-body-inside-Sale-info thisIsProduct-${part.id}`}>
      <InfoProductGlobal>
        <InfoProductBlock>
          <span className='block-attr'>Peça</span>
          <span className='block-value'>{part.name}</span>
        </InfoProductBlock>
        <InfoProductBlock>
          <span className='block-attr'>Velo.</span>
          <span className='block-value'>{part.speed}</span>
        </InfoProductBlock>
        <InfoProductBlock>
          <span className='block-attr'>Acel.</span>
          <span className='block-value'>{part.acceleration}</span>
        </InfoProductBlock>
        <InfoProductBlock>
          <span className='block-attr'>Resis.</span>
          <span className='block-value'>{part.resistance}</span>
        </InfoProductBlock>
        <InfoProductBlock>
          <span className='block-attr'>Turbo</span>
          <span className='block-value'>{part.turbo}</span>
        </InfoProductBlock>
        <InfoProductBlock>
          <span className='block-attr'>Marchas</span>
          <span className='block-value'>{part.exchange}</span>
        </InfoProductBlock>
        <InfoProductBlock>
          <span className='block-attr'>Taxa de Atualização</span>
          <span className='block-value'>
            <span className='block-value-update'>
              <span>Velo.</span> <span>+{part.update_config.speed}</span>
            </span>
            <span className='block-value-update'>
              <span>Acel.</span ><span>+{part.update_config.acceleration}</span>
            </span>
            <span className='block-value-update'>
              <span>Resis.<span> </span>+{part.update_config.resistance}</span>
            </span>
            <span className='block-value-update'>
              <span>Preço</span> <span>{transformAsCoint(part.update_config.price)}</span>
            </span>
          </span>
        </InfoProductBlock>
        <InfoProductBlock>
          <span className='block-attr'>Valor</span>
          <span className='block-value'>{transformAsCoint(part.price)}</span>
        </InfoProductBlock>
        <InfoProductBlock>
          <span>{transformAsCoint(gold)}</span><AwesomeButton size='medium' type='primary' ripple action={() => toBuy(part.name, 'engines', 'engine', part.price)}>Comprar</AwesomeButton>
        </InfoProductBlock>
      </InfoProductGlobal>
    </InfoProductId>
  </PreviewProduct>))

  return divs
}

function renderBody(attr, config) {
  return attr? (
    <Sale name={config.name} buyPart={config.buyPart} gold={config.gold}  renderProducts={renderProducts} />
  ): (
    <>
      <ExchangesArea>
        <ExchangeQtd>{config.data.exchange} marchas</ExchangeQtd>
        <ul>
          {renderLiMarchas(config.data)}
        </ul>
      </ExchangesArea>
      <AprimoreTitle>Motor '{config.name}' equipada!</AprimoreTitle>
      <Attributes message={config.message} data={config.data} submit={() => submit(config.gold, config.data, config.update)} render={renderLiAttr} />
    </>
  )
}

export default ({ message, buyPart, sale, gold, name, data, update }) =>
  <>
    {renderBody(sale, { message, buyPart, gold, name, data, update })}
  </>
