import React, { useState, useEffect } from 'react'

import { 
  Aprimore, Header, HeaderMenuItem,
  Content, InsideContent, Gold,
  BaseButtons, BtnSale, BtnExit 
} from './styles'

import { transformAsCoint } from '../../../pages/Dashboard/functions'

import Engine from './Parts/Engine'
import Transmission from './Parts/Transmission'
import Whells from './Parts/Whells'
import Cylinder from './Parts/Cylinder'
import Protection from './Parts/Protection'

const initialScreenAprimore = {
  engine: false,
  transmission: false,
  whells: false,
  cylinder: false,
  protection: false
}

function renderContent(data) {
  if (data.aprimore.engine) return <Engine message={data.insideAprimore.messageUpdate} buyPart={data.insideAprimore.buyPart} update={data.insideAprimore.updatePart} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.engine} data={JSON.parse(data.auth.car.engine_object)} />

  if (data.aprimore.transmission) return <Transmission message={data.insideAprimore.messageUpdate} buyPart={data.insideAprimore.buyPart} update={data.insideAprimore.updatePart} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.transmission} data={JSON.parse(data.auth.car.transmission_object)} />

  if (data.aprimore.whells) return <Whells message={data.insideAprimore.messageUpdate} buyPart={data.insideAprimore.buyPart} update={data.insideAprimore.updatePart} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.whells} data={JSON.parse(data.auth.car.whells_object)} />

  if (data.aprimore.cylinder) return <Cylinder message={data.insideAprimore.messageUpdate} buyPart={data.insideAprimore.buyPart} update={data.insideAprimore.updatePart} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.cylinder} data={JSON.parse(data.auth.car.cylinder_object)} />

  if (data.aprimore.protection) return <Protection message={data.insideAprimore.messageUpdate} buyPart={data.insideAprimore.buyPart} update={data.insideAprimore.updatePart} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.protection} data={JSON.parse(data.auth.car.protection_object)} />
}

export default ({ data, closeModal, change }) =>
  <Aprimore>
    <Header>
      <ul className='Dashboard-Aprimorator-parts-ul'>
        <HeaderMenuItem up={JSON.parse(data.auth.car.engine_object).ups} onClick={() => change('engine', 0)}><img src='http://localhost:3001/files/icons/aprimore/parts/motor.png' alt='Motor icon' /></HeaderMenuItem>
        <HeaderMenuItem up={JSON.parse(data.auth.car.transmission_object).ups} onClick={() => change('transmission', 1)}><img src='http://localhost:3001/files/icons/aprimore/parts/cambio.png' alt='Câmbio icon' /> </HeaderMenuItem>
        <HeaderMenuItem up={JSON.parse(data.auth.car.whells_object).ups} onClick={() => change('whells', 2)}><img src='http://localhost:3001/files/icons/aprimore/parts/rodas.png' alt='Rodas icon' /></HeaderMenuItem>
        <HeaderMenuItem up={JSON.parse(data.auth.car.cylinder_object).ups} onClick={() => change('cylinder', 3)}><img src='http://localhost:3001/files/icons/aprimore/parts/cilindro.png' alt='Cilindro icon' /></HeaderMenuItem>
        <HeaderMenuItem up={JSON.parse(data.auth.car.protection_object).ups} onClick={() => change('protection', 4)}><img src='http://localhost:3001/files/icons/aprimore/parts/protecao.png' alt='Proteção icon' /></HeaderMenuItem>
      </ul>
    </Header>
    <Content>
      <Gold>{transformAsCoint(data.auth.user.gold)}</Gold>
      <InsideContent>
        {renderContent(data)}
      </InsideContent>
    </Content>
    <BaseButtons className='Dashboard-Aprimorator-buttonsBase'>
      <BtnSale onClick={data.insideAprimore.attrToSale}><i className="fa fa-cart-arrow-down"></i></BtnSale>
      <BtnExit onClick={closeModal}><i className="fa fa-times-circle"></i></BtnExit>
    </BaseButtons>
  </Aprimore>
