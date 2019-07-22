import React from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

import './css/index.css'

import { firstLitterToUpperCase } from '../../../pages/Dashboard/functions'
import { getAttr, getJoin, getFc } from './functions'

export default ({ data, updatePhoto }) =>
  <div className='Dashboard-content-Profile'>
    <fieldset className='Dashboard-content-Profile-fieldset'>
      <legend>{firstLitterToUpperCase(data.user.name)}</legend>
      <div className='Dashboard-content-Profile-fieldset-content'>
        <div className='Dashboard-content-Profile-fieldset-content-data'>
          <label htmlFor='file'><AwesomeButton className='Dashboard-content-Profile-fieldset-content-data-changeProfile' size='large' type='primary' ripple action={() => document.getElementById('file').click()}>Trocar foto</AwesomeButton></label>
          <input id='file' type='file' onChange={e => updatePhoto(e.target.files[0])} />
        </div>
        <div className='Dashboard-content-Profile-fieldset-content-data'>
          <span>Nickname: </span>
          <span>{data.user.nickname}</span>
        </div>
        <div className='Dashboard-content-Profile-fieldset-content-data'>
          <span>Email: </span>
          <span>{data.user.email}</span>
        </div>
        <div className='Dashboard-content-Profile-fieldset-content-data'>
          <span>Nivel: </span>
          <span>{data.user.nvl}</span>
        </div>
        <div className='Dashboard-content-Profile-fieldset-content-data'>
          <span>Experiência: </span>
          <span>{data.user.xp}</span>
        </div>
        <fieldset className='Dashboard-content-Profile-fieldset-content-data-car'>
          <legend>{data.car.model}</legend>
          <div className='Dashboard-content-Profile-fieldset-content-data'>
            <span>Motor: </span>
            <span>{data.car.engine}</span>
          </div>
          <div className='Dashboard-content-Profile-fieldset-content-data'>
            <span>Câmbio: </span>
            <span>{data.car.transmission}</span>
          </div>
          <div className='Dashboard-content-Profile-fieldset-content-data'>
            <span>Rodas: </span>
            <span>{data.car.whells}</span>
          </div>
          <div className='Dashboard-content-Profile-fieldset-content-data'>
            <span>Cilindro: </span>
            <span>{data.car.cylinder}</span>
          </div>
          <div className='Dashboard-content-Profile-fieldset-content-data'>
            <span>Proteção: </span>
            <span>{data.car.protection}</span>
          </div>
          <div className='Dashboard-content-Profile-fieldset-content-data-car-attr'>
            <table cellSpacing='0' cellPadding='0' className='Dashboard-content-Profile-fieldset-content-data-car-attr-table'>
              <thead>
                <tr><th colSpan='7'>Visão geral</th></tr>
                <tr><th>Atributo</th><th>Motor +{JSON.parse(data.car.engine_object).ups}</th><th>Câmbio +{JSON.parse(data.car.transmission_object).ups}</th><th>Rodas +{JSON.parse(data.car.whells_object).ups}</th><th>Cilindro +{JSON.parse(data.car.cylinder_object).ups}</th><th>Proteção +{JSON.parse(data.car.protection_object).ups}</th><th>Total</th></tr>
              </thead>
              <tbody>
                <tr><td>Velocidade</td>
                <td>{getAttr(JSON.parse(data.car.engine_object), 'speed')}</td>
                <td>{getAttr(JSON.parse(data.car.transmission_object), 'speed')}</td>
                <td>{getAttr(JSON.parse(data.car.whells_object), 'speed')}</td>
                <td>{getAttr(JSON.parse(data.car.cylinder_object), 'speed')}</td>
                <td>{getAttr(JSON.parse(data.car.protection_object), 'speed')}</td>
                <td>{getJoin(data.car, 'speed')}</td></tr>
                <tr><td>Aceleração</td>
                <td>{getAttr(JSON.parse(data.car.engine_object), 'acceleration')}</td>
                <td>{getAttr(JSON.parse(data.car.transmission_object), 'acceleration')}</td>
                <td>{getAttr(JSON.parse(data.car.whells_object), 'acceleration')}</td>
                <td>{getAttr(JSON.parse(data.car.cylinder_object), 'acceleration')}</td>
                <td>{getAttr(JSON.parse(data.car.protection_object), 'acceleration')}</td>
                <td>{getJoin(data.car, 'acceleration')}</td></tr>
                <tr><td>Turbo</td>
                <td>{getAttr(JSON.parse(data.car.engine_object), 'turbo')}</td>
                <td>{getAttr(JSON.parse(data.car.transmission_object), 'turbo')}</td>
                <td>{getAttr(JSON.parse(data.car.whells_object), 'turbo')}</td>
                <td>{getAttr(JSON.parse(data.car.cylinder_object), 'turbo')}</td>
                <td>{getAttr(JSON.parse(data.car.protection_object), 'turbo')}</td>
                <td>{getJoin(data.car, 'turbo')}</td></tr>
                <tr><td>Resistência</td>
                <td>{getAttr(JSON.parse(data.car.engine_object), 'resistance')}</td>
                <td>{getAttr(JSON.parse(data.car.transmission_object), 'resistance')}</td>
                <td>{getAttr(JSON.parse(data.car.whells_object), 'resistance')}</td>
                <td>{getAttr(JSON.parse(data.car.cylinder_object), 'resistance')}</td>
                <td>{getAttr(JSON.parse(data.car.protection_object), 'resistance')}</td>
                <td>{getJoin(data.car, 'resistance')}</td></tr>
                <tr><td colSpan='5'>FC</td><td colSpan='2'>{getFc(data.car)}</td></tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
    </fieldset>
  </div>
