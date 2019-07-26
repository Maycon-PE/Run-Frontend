import React from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

import './css/index.css'

import Table from './Components/Table'

import { transformAsCoint, firstLitterToUpperCase } from '../../../pages/Dashboard/functions'
import { setDistance, renderP } from './functions'
import run from './script/engine'

export default ({ play, data, adv, change }) =>
  <div className='Dashboard-content-Play'>
    <span className='Dashboard-content-Play-title'>Play</span>
    <div className='Dashboard-content-Play-divChallenge'>
      <div className='Dashboard-content-Play-divChallenge-card-area'>
        <div className='Dashboard-content-Play-divChallenge-card'>
          <img src={`http://localhost:3001/files/${data.user.src}.jpg`} alt='Foto do usuário' />
          <span className='Dashboard-content-Play-divChallenge-card-info'>{firstLitterToUpperCase(data.user.name)} nivel {data.user.nvl}</span>
        </div>
        <button className='Dashboard-content-Play-divChallenge-refresh' onClick={change}>Refresh</button>
        <div className='Dashboard-content-Play-divChallenge-card'>
          <img src={`http://localhost:3001/files/${adv.bot.src}.jpg`} alt='Foto do adversário' />
          <span className='Dashboard-content-Play-divChallenge-card-info'>{adv.bot.nickname} nivel {adv.bot.nvl}</span>
        </div>
      </div>
      <div className='Dashboard-content-Play-divChallenge-buttom-area'>
        <span>Vitória R$ {transformAsCoint((adv.bot.nvl * 1000) - data.user.nvl * 500)} | Derrota R$ {transformAsCoint((adv.bot.nvl * 300) - data.user.nvl * 200)}</span>
        <AwesomeButton size='large' type='primary' ripple action={() => {
            play.startStop(true)
            setTimeout(() => run([{ pilot: data.user, car: data.car }, { pilot: adv.bot, car: adv.car }], setDistance(data.user.nvl), play.win), 1000)
          }} >Correr</AwesomeButton>
      </div>
    </div>
    <div className='Dashboard-content-Play-game-area'>
      {!play.played? (
        <img className='Dashboard-content-Play-game-area-gif' src='./image/carGif.gif' alt='gif animado' />
      ) : (
        <>
          <span id='som-corrida'></span>
          <div id='lideres-table' className="lideres">
            <div className='titulo-lideranca'>
              <span className='display-time'>00:00:00</span>
              <span className='span-liderea'>Lideres</span>
              <span id='distancia'>{setDistance(data.user.nvl)} km/h</span>
            </div>
            <div className='liderancas' id="placar">
              {renderP([{ pilot: data.user, car: data.car }, { pilot: adv.bot, car: adv.car }])}
            </div>
          </div>
          <div className='Dashboard-content-Play-game-area-tables'>
            <Table pilot={data.user} car={data.car} index='0' />
            <Table pilot={adv.bot} car={adv.car} index='1' />
          </div>
          <div id='btn-stop' className='Dashboard-content-Play-game-area-btns'>
            <span>Pejuizo - R$ {transformAsCoint((adv.bot.nvl * 200) - data.user.nvl * 100)}</span>
            <AwesomeButton size='large' type='secondary' ripple action={() => {
                run()
                setTimeout(() => play.startStop(false), 2000)
              }}>Desistir</AwesomeButton>
          </div>
        </>
      )}
    </div>
  </div>