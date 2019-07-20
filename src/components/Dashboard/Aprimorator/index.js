import React from 'react'

import './css/index.css'

import Engine from './Parts/Engine'
import Transmission from './Parts/Transmission'
import Whells from './Parts/Whells'
import Cylinder from './Parts/Cylinder'
import Protection from './Parts/Protection'

function renderContent(data) {

  if (data.aprimore.engine) return <Engine buyPart={data.buyPart} update={data.updatePart} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.engine} data={JSON.parse(data.auth.car.engine_object)} />

  if (data.aprimore.transmission) return <Transmission buyPart={data.buyPart} update={data.updatePart} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.transmission} data={JSON.parse(data.auth.car.transmission_object)} />

  if (data.aprimore.whells) return <Whells buyPart={data.buyPart} update={data.updatePart} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.whells} data={JSON.parse(data.auth.car.whells_object)} />

  if (data.aprimore.cylinder) return <Cylinder buyPart={data.buyPart} update={data.updatePart} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.cylinder} data={JSON.parse(data.auth.car.cylinder_object)} />

  if (data.aprimore.protection) return <Protection buyPart={data.buyPart} update={data.updatePart} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.protection} data={JSON.parse(data.auth.car.protection_object)} />
}


export default ({ data, closeModal, change }) =>
  <div className='Dashboard-Aprimorator'>
    <div className='Dashboard-Aprimorator-parts'>
      <ul className='Dashboard-Aprimorator-parts-ul'>
        <li onClick={() => change('engine', 0)}><img src='http://localhost:3001/files/icons/aprimore/parts/motor.png' alt='Motor icon' /> +{JSON.parse(data.auth.car.engine_object).ups}</li>
        <li onClick={() => change('transmission', 1)}><img src='http://localhost:3001/files/icons/aprimore/parts/cambio.png' alt='Câmbio icon' /> +{JSON.parse(data.auth.car.transmission_object).ups}</li>
        <li onClick={() => change('whells', 2)}><img src='http://localhost:3001/files/icons/aprimore/parts/rodas.png' alt='Rodas icon' /> +{JSON.parse(data.auth.car.whells_object).ups}</li>
        <li onClick={() => change('cylinder', 3)}><img src='http://localhost:3001/files/icons/aprimore/parts/cilindro.png' alt='Cilindro icon' /> +{JSON.parse(data.auth.car.cylinder_object).ups}</li>
        <li onClick={() => change('protection', 4)}><img src='http://localhost:3001/files/icons/aprimore/parts/protecao.png' alt='Proteção icon' /> +{JSON.parse(data.auth.car.protection_object).ups}</li>
      </ul>
    </div>
    <div className='Dashboard-Aprimorator-content'>
      {renderContent(data)}
    </div>
    <div className='Dashboard-Aprimorator-buttonsBase'>
      <button className='Dashboard-Aprimorator-buttonsBase-btnLoja' onClick={data.attrToSale}><i className="fa fa-cart-arrow-down"></i></button>
      <button className='Dashboard-Aprimorator-buttonsBase-btnExit' onClick={closeModal}><i className="fa fa-times-circle"></i></button>
    </div>
  </div>