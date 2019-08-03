import React, { useEffect } from 'react'

import {
 Player, Header, SpeedometerArea, 
 Harnessing , Speedometer, PointerArea, 
 Speed, ExchangeArea, Brake, 
 Exchange, TurboArea, TurboColorEffect, 
 TurboBar, Category, DistanceArea,
 ModelArea, GrauArea } from './styles'

import infoRapidas from './script/fast_info'
import { getForca } from './functions'

import velocimetro from '../../images/insideTable/velocimetro.png'
import ponteiro from '../../images/insideTable/ponteiro.png'
import chama_nitro from '../../images/insideTable/chama_nitro.gif'
import cambio_desligado from '../../images/insideTable/cambio_desligado.png'

export default ({ pilot, car, index }) => {
  useEffect(() => infoRapidas(), [])

  return (
    <Player>
      <Header>{pilot.nickname} nvl <span>{pilot.nvl}</span></Header>
      <SpeedometerArea>
        <Harnessing className={`aproveitamento${index}`}></Harnessing>
        <Speedometer className='velocimetro' src={velocimetro} alt='velocimetro' />
        <PointerArea id={`ponteiro${index}`} className='div-ponteiro'>
          <img src={ponteiro} alt='ponteiro' />
        </PointerArea>
        <Speed id={`velocidade${index}`}>0 km/h</Speed>
      </SpeedometerArea>
      <ExchangeArea className='Dashboard-content-Play-game-area-block-cambioArea'>
        <Harnessing className={`aproveitamento${index}`}></Harnessing>
        <Brake id={`quebra${index}`}>0%</Brake>
        <Exchange id={`cambio${index}`} src={cambio_desligado} alt='cambio' />
        <Category id={`categoria${index}`}>{getForca(car, { res: 'formatado', index })}</Category>
        <TurboArea id={`div-nitro${index}`} className='nitro'>
          <TurboBar id={`nitro${index}`}>
            <img id={`chama${index}`} src={chama_nitro} alt='chama do nitro' />
          </TurboBar>
          <TurboColorEffect className='efeito-barra-nitro'></TurboColorEffect>
          <span id={`som-nitro${index}`}></span>
        </TurboArea>
      </ExchangeArea>
      <DistanceArea>
        <span id={`distancia${index}`}>0.000 m</span>
      </DistanceArea>
      <ModelArea className='Dashboard-content-Play-game-area-block-modeloArea'>
        <span id={`modelo-${index}`}>{car.model} </span>
        <span id={`modelo-olho-${index}`} className='modelo-olho'><i className="fa fa-eye"></i></span>
        <div id={`modelo-info-rapida-carro${index}`}>
          <div id={`modelo-info-rapida-velocidade${index}`}>Vel.: {(getForca(car, { res: 'attr', value: 0 })).toFixed(1)} km/h</div>
          <div id={`modelo-info-rapida-aceleracao${index}`}>Ace.: {(getForca(car, { res: 'attr', value: 1 })).toFixed(1)} cav.</div>
          <div id={`modelo-info-rapida-resistencia${index}`}>Res.: {(getForca(car, { res: 'attr', value: 2 })).toFixed(1)} pt</div>
          <div id={`modelo-info-rapida-turbo${index}`}>Turbo: {(getForca(car, { res: 'attr', value: 3 })).toFixed(1)} lt</div>
          <div id={`modelo-info-rapida-forca${index}`}>FC: {(getForca(car, { res: 'numero'})).toFixed(1)} k</div>
        </div>
      </ModelArea>
      <GrauArea id={`grau${index}`}>
        <span></span>
      </GrauArea>  
    </Player>
  )
}
