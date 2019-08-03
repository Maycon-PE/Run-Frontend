import React from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

//Estilos
import { Table } from '../../../styles'
import { Dashboard, ContentTitle } from '../../../pages/Dashboard/styles'
import { Fieldset, ImgProfile, Data, SubTitle } from './styles'

import { firstLitterToUpperCase, transformAsCoint, transformAsNumberValid } from '../../../pages/Dashboard/functions'
import { getAttr, getJoin, getFc } from './functions'

export default ({ data, updatePhoto }) =>
  <Dashboard>
    <ContentTitle>Perfil</ContentTitle>
    <Fieldset>
      <SubTitle>{firstLitterToUpperCase(data.user.name)}</SubTitle>
      <ImgProfile>
        <label htmlFor='file'><AwesomeButton className='Dashboard-content-Profile-fieldset-content-data-changeProfile' size='large' type='primary' ripple action={() => document.getElementById('file').click()}>Trocar foto</AwesomeButton> <AwesomeButton className='Dashboard-content-Profile-fieldset-content-data-changeProfile' size='large' type='secondary' ripple >Mudar informações</AwesomeButton></label>
        <img src={`http://localhost:3001/files/${data.user.src}.jpg`} alt='Sua foto do perfil' /><input id='file' type='file' onChange={e => updatePhoto(e.target.files[0])} />
      </ImgProfile>
      <Data>
        <span>Nickname: </span>
        <span>{data.user.nickname}</span>
      </Data>
      <Data>
        <span>Email: </span>
        <span>{data.user.email}</span>
      </Data>
      <Data>
        <span>Nivel: </span>
        <span>{data.user.nvl}</span>
      </Data>
      <Data>
        <span>Experiência: </span>
        <span>Atual - {transformAsNumberValid(data.user.xp)} | Meta - {transformAsNumberValid(data.user.limit_xp)}</span>
      </Data>
      <Data>
        <span>Dinheiro: </span>
        <span>{transformAsCoint(data.user.gold)}</span>
      </Data>
      <Fieldset>
        <SubTitle>{data.car.model}</SubTitle>
        <Data>
          <span>Motor: </span>
          <span>{data.car.engine}</span>
        </Data>
        <Data>
          <span>Câmbio: </span>
          <span>{data.car.transmission}</span>
        </Data>
        <Data>
          <span>Rodas: </span>
          <span>{data.car.whells}</span>
        </Data>
        <Data>
          <span>Cilindro: </span>
          <span>{data.car.cylinder}</span>
        </Data>
        <Data>
          <span>Proteção: </span>
          <span>{data.car.protection}</span>
        </Data>
        <div>
          <Table cellSpacing='0' cellPadding='0'>
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
          </Table>
        </div>
      </Fieldset>
    </Fieldset>
  </Dashboard>
