import React, { useState } from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

//Estilos
import { Table } from '../../../styles'
import { Dashboard, ContentTitle } from '../../../pages/Dashboard/styles'
import { Fieldset, ImgProfile, Data, SubTitle, InputAsSpan, ButtonEdit } from './styles'

import { firstLitterToUpperCase, transformAsCoint, transformAsNumberValid } from '../../../pages/Dashboard/functions'
import { getAttr, getJoin, getFc } from './functions'
import { validationNickName, validationEmail } from '../../Home/Inicio/functions'

const initialState = {
  edit: false,
  index: 0,
  body: [
    { 
      label: 'Editar',
      style: { background: '#d7ff00' },
      action(field) {
        return new Promise(resolve => {
          const state  = { ...initialState }
          state.edit = true
          state.index = 1
          document.getElementById(`change-${field}`).focus()

          resolve({ status: 'edit', state })
        })
      }
    },  {
      label: 'Salvar',
      style: { background: '#20d800' },
      action(field, { function: execute, data, verify }) {
        return new Promise(resolve => {
          if (data.original !== data.other) {
              if (verify(data.other)) {
                const password = prompt('Sua senha: ')
                execute(field, data.other, password)
                .then(status => {
                  if (status) {
                    resolve({ status: true, state: { ...initialState }, message: 'Alterado ' })
                  } else  {
                    resolve({ status: false })
                  }
                })
              } else {
                resolve({ status: false })    
              }
          } else {
            resolve({ status: false })
          }
        }) 
      }
    }
  ],
  message: ''
}


export default ({ data, updatePhoto, changeInfo }) => {
  const [nickname, setNickname] = useState({ state: { ...initialState }, original: data.user.nickname, other: data.user.nickname })
  const [email, setEmail] = useState({ state: { ...initialState }, original: data.user.email, other: data.user.email })
  const [name, setName] = useState({ state: { ...initialState }, original: data.user.name, other: data.user.name })

  return (
    <Dashboard>
      <ContentTitle>Perfil</ContentTitle>
      <Fieldset>
        <SubTitle>{firstLitterToUpperCase(data.user.name)}</SubTitle>
        <ImgProfile>
          <label htmlFor='file'><AwesomeButton size='large' type='primary' ripple action={() => document.getElementById('file').click()}>Trocar foto</AwesomeButton></label>
          <img src={`http://localhost:3001/files/${data.user.src}.jpg`} alt='Sua foto do perfil' /><input id='file' type='file' onChange={e => updatePhoto(e.target.files[0])} />
        </ImgProfile>
        <Data edit>
          <span>
            <span>Name: </span> <br />
            <InputAsSpan id='change-name' defaultValue={data.user.name} onChange={e => setName({ ...name, other: e.target.value })} changing={name.state.edit} maxLength='13' minLength='3' />
          </span>
          <span>
            {name.message}
            <ButtonEdit bg={name.state.body[name.state.index].style.background} onClick={() => {
              name.state.body[name.state.index].action('name', { function: changeInfo, data: { original: name.original, other: name.other }, verify: validationNickName })
                .then(({ status, index, state: newState,  message }) => {
                  status === 'edit' && (() => {
                    setName({ ...name, state: newState, message: '' })
                  })()
                  status === true && (() => {
                    const { other }  = name
                    const newName = { original: other, other, message }
                    setName({ state: newState, ...newName })
                  })()
                })
            }}>{name.state.body[name.state.index].label}</ButtonEdit>
            {name.state.edit && <ButtonEdit bg='#ff0000' onClick={() => {
              document.getElementById('change-name').value = name.original
              setName({ state: { ...initialState }, ...{ original: name.original, other: name.original, message: '' }})
            }}>Cancelar</ButtonEdit>} 
          </span>
        </Data>
        <Data edit>
          <span>
            <span>Nickname: </span> <br />
            <InputAsSpan id='change-nickname' defaultValue={data.user.nickname} onChange={e => setNickname({ ...nickname, other: e.target.value })} changing={nickname.state.edit} maxLength='13' minLength='3' />
          </span>
          <span>
            {nickname.message}
            <ButtonEdit bg={nickname.state.body[nickname.state.index].style.background} onClick={() => {
              nickname.state.body[nickname.state.index].action('nickname', { function: changeInfo, data: { original: nickname.original, other: nickname.other }, verify: validationNickName })
                .then(({ status, index, state: newState,  message }) => {
                  status === 'edit' && (() => {
                    setNickname({ ...nickname, state: newState, message: '' })
                  })()
                  status === true && (() => {
                    const { other }  = nickname
                    const newNickname = { original: other, other, message }
                    setNickname({ state: newState, ...newNickname })
                  })()
                })
            }}>{nickname.state.body[nickname.state.index].label}</ButtonEdit>
            {nickname.state.edit && <ButtonEdit bg='#ff0000' onClick={() => {
              document.getElementById('change-nickname').value = nickname.original
              setNickname({ state: { ...initialState }, ...{ original: nickname.original, other: nickname.original, message: '' }})
            }}>Cancelar</ButtonEdit>} 
          </span>
        </Data>
        <Data edit>
          <span>
            <span>Email: </span> <br />
            <InputAsSpan id='change-email' defaultValue={data.user.email} onChange={e => setEmail({ ...email, other: e.target.value })} changing={email.state.edit} maxLength='50' />
          </span>
          <span>
            {email.message}
            <ButtonEdit bg={email.state.body[email.state.index].style.background} onClick={() => {
              email.state.body[email.state.index].action('email', { function: changeInfo, data: { original: email.original, other: email.other }, verify: validationEmail })
                .then(({ status, index, state: newState,  message }) => {
                  status === 'edit' && (() => {
                    setEmail({ ...email, state: newState, message: '' })
                  })()
                  status === true && (() => {
                    const { other }  = email
                    const newEmail = { original: other, other, message }
                    setEmail({ state: newState, ...newEmail })
                  })()
                })
            }}>{email.state.body[email.state.index].label}</ButtonEdit>
            {email.state.edit && <ButtonEdit bg='#ff0000' onClick={() => {
              document.getElementById('change-email').value = email.original
              setEmail({ state: { ...initialState }, ...{ original: email.original, other: email.original, message: '' }})
            }}>Cancelar</ButtonEdit>} 
          </span>
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
  )
}