import React from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

import './css/index.css'

import Table from './Components/Table'

import { transformAsCoint, firstLitterToUpperCase, victory, lose, shame } from '../../../pages/Dashboard/functions'
import { setDistance, renderP } from './functions'
import run from './script/engine'

export default ({ play, data, adv, change }) =>
  <div className='Dashboard-content-Play'>
    <span className='Dashboard-content-Play-title'>Play</span>
    <div className='Dashboard-content-Play-divChallenge'>
      <div className='Dashboard-content-Play-divChallenge-card-area'>
        <div className='Dashboard-content-Play-divChallenge-card'>
          <img src={`http://localhost:3001/files/${data.user.src}.jpg`} alt='Foto do usuário' />
          <span className='Dashboard-content-Play-divChallenge-card-info' nvl={data.user.nvl}>{firstLitterToUpperCase(data.user.name)}</span>
        </div>
        <AwesomeButton size='large' type='secondary' ripple action={change}>Outro adversário</AwesomeButton>
        <div className='Dashboard-content-Play-divChallenge-card-area-advs'>
          {adv.map(({ pilot, car }, index) => {
            return (
              <div key={index} className='Dashboard-content-Play-divChallenge-card'>
                <img src={`http://localhost:3001/files/${pilot.src}.jpg`} alt='Foto do adversário' />
                <span className='Dashboard-content-Play-divChallenge-card-info' nvl={pilot.nvl}>{firstLitterToUpperCase(pilot.nickname)}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='Dashboard-content-Play-divChallenge-buttom-area'>
        <span>Vitória {transformAsCoint(victory('gold', data.user, adv))} | Derrota {transformAsCoint(lose('gold', data.user, adv))}</span>
        <AwesomeButton size='large' type='primary' ripple action={() => {
            play.startStop(true)
            setTimeout(() => run([{ pilot: data.user, car: data.car }, ...adv], setDistance(data.user.nvl), play.win), 1000)
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
              {renderP([{ pilot: data.user, car: data.car }, ...adv])}
            </div>
          </div>
          <div className='Dashboard-content-Play-game-area-tables'>
            <Table pilot={data.user} car={data.car} index='0' />
            {adv.map(({ pilot, car }, index) => <Table key={index} pilot={pilot} car={car} index={index + 1} /> )}
          </div>
          <div id='btn-stop' className='Dashboard-content-Play-game-area-btns'>
            <span>Pejuizo - {transformAsCoint(shame(data.user, adv))}</span>
            <AwesomeButton size='large' type='secondary' ripple action={() => {
                run()
                setTimeout(() => play.startStop(false), 2000)
              }}>Desistir</AwesomeButton>
          </div>
        </>
      )}
    </div>
  </div>