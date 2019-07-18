import React from 'react'
import { Link } from 'react-router-dom'
import { AwesomeButton } from "react-awesome-button"


import "react-awesome-button/dist/styles.css"
import './css/index.css'

function changeTable(none, block) {
  document.querySelector(`.Dashboard-Aside-areaInfos-table${none}Info`).style.zIndex = '-1'
  document.querySelector(`.Dashboard-Aside-areaInfos-table${block}Info`).style.zIndex = '1'
}

export default ({ data, openModal }) => 
  <aside className='Dashboard-Aside'>
    <div className='Dashboard-Aside-user-img'>
      <img src={`http://localhost:3001/files/pilots/${data.auth.user.src}.jpg`} alt='Profile do usuário' />
    </div>
    <table cellSpacing='0' cellPadding='0' className='Dashboard-Aside-tableBase'>
      <thead>
        <tr>
          <th onClick={() => changeTable('Car', 'User')}>Piloto</th><th onClick={() => changeTable('User', 'Car')}>Carro</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td onClick={() => changeTable('Car', 'User')}>{data.auth.user.nickname}</td><td onClick={() => changeTable('User', 'Car')}>{data.auth.car.model}</td>
        </tr>
      </tbody>
    </table>
    <div className='Dashboard-Aside-areaInfos'>
      <table cellSpacing='0' cellPadding='0' className='Dashboard-Aside-areaInfos-tableUserInfo'>
        <thead>
          <tr><th colSpan='2'>Você</th></tr>
          <tr><th>Atributo</th><th>Valor</th></tr>
        </thead>
        <tbody>
          <tr><td>Nome</td><td>{data.auth.user.name}</td></tr>
          <tr><td>Nick</td><td>{data.auth.user.nickname}</td></tr>
          <tr><td>Gênero</td><td>{data.auth.user.genre}</td></tr>
          <tr><td>Pais</td><td>{data.auth.user.country}</td></tr>
          <tr><td>nvl</td><td>{data.auth.user.nvl}</td></tr>
          <tr><td>xp</td><td>{data.auth.user.xp}</td></tr>
          <tr><td colSpan='2'></td></tr>
        </tbody>
      </table>
      <table cellSpacing='0' cellPadding='0' className='Dashboard-Aside-areaInfos-tableCarInfo'>
        <thead>
          <tr><th colSpan='2'>Seu carro</th></tr>
          <tr>
            <th>Atributo</th><th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Modelo</td><td>{data.auth.car.model}</td></tr>
          <tr><td>Motor</td><td>{data.auth.car.engine}</td></tr>
          <tr><td>Câmbio</td><td>{data.auth.car.transmission}</td></tr>  
          <tr><td>Cilindro</td><td>{data.auth.car.cylinder}</td></tr>
          <tr><td>Proteção</td><td>{data.auth.car.protection}</td></tr>
          <tr><td>Rodas</td><td>{data.auth.car.whells}</td></tr>
          <tr><td colSpan='2'><AwesomeButton className='Dashboard-Aside-car-btn-update' size='medium' type='secondary' ripple action={openModal}>Aprimorar</AwesomeButton></td></tr>
        </tbody>
      </table>
    </div>
    <div className='Dashboard-Aside-car-btnUpdate-area'>
      
    </div>
    <div className='Dashboard-Aside-logout'>
      <Link to='/logout'>Sair</Link>
    </div>
  </aside>