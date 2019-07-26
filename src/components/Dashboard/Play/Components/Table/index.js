import React, { useEffect } from 'react'

import './css/index.css'

import infoRapidas from './script/fast_info'
import { getForca } from './functions'

import velocimetro from '../../images/insideTable/velocimetro.png'
import ponteiro from '../../images/insideTable/ponteiro.png'
import chama_nitro from '../../images/insideTable/chama_nitro.gif'
import cambio_desligado from '../../images/insideTable/cambio_desligado.png'

export default ({ pilot, car, index }) => {
  useEffect(() => infoRapidas(), [])

  return (
    <div className='Dashboard-content-Play-game-area-block'>
      <div className='Dashboard-content-Play-game-area-block-name'>{pilot.nickname} nvl <span>{pilot.nvl}</span></div>
      <div className='Dashboard-content-Play-game-area-block-velocimetroArea'>
        <div className={`aproveitamento aproveitamento${index}`}></div>
        <img className='velocimetro' src={velocimetro} alt='velocimetro' />
        <div id={`ponteiro${index}`} className='div-ponteiro'>
          <img className='ponteiro' src={ponteiro} alt='ponteiro' />
        </div>
        <span id={`velocidade${index}`} className='velocidade'>0 km/h</span>
      </div>
      <div className='Dashboard-content-Play-game-area-block-cambioArea'>
        <div className={`aproveitamento aproveitamento${index}`}></div>
        <span className='quebra' id={`quebra${index}`}>0%</span>
        <img id={`cambio${index}`} className='cambio' src={cambio_desligado} alt='cambio' />
        <span id={`categoria${index}`} className='categoria' title='Car quality'>{getForca(car, { res: 'formatado', index })}</span>
        <div id={`div-nitro${index}`} className="nitro">
          <span id={`nitro${index}`} className='barras-nitros'>
            <img id={`chama${index}`} src={chama_nitro} alt='chama do nitro' />
          </span>
          <span className='efeito-barra-nitro'></span>
          <span id={`som-nitro${index}`}></span>
        </div>
      </div>
      <div className='Dashboard-content-Play-game-area-block-distanciaArea'>
        <span id={`distancia${index}`} className='distancia'>0.000 m</span>
      </div>
      <div className='Dashboard-content-Play-game-area-block-modeloArea'>
        <span id={`modelo-${index}`}>{car.model} </span>
        <span id={`modelo-olho-${index}`}><i className="fa fa-eye"></i></span>
        <div id={`modelo-info-rapida-carro${index}`} className='info-rapida'>
          <div id={`modelo-info-rapida-velocidade${index}`}>Vel.: {(getForca(car, { res: 'attr', value: 0 })).toFixed(1)} km/h</div>
          <div id={`modelo-info-rapida-aceleracao${index}`}>Ace.: {(getForca(car, { res: 'attr', value: 1 })).toFixed(1)} cav.</div>
          <div id={`modelo-info-rapida-resistencia${index}`}>Res.: {(getForca(car, { res: 'attr', value: 2 })).toFixed(1)} pt</div>
          <div id={`modelo-info-rapida-turbo${index}`}>Turbo: {(getForca(car, { res: 'attr', value: 3 })).toFixed(1)} lt</div>
          <div id={`modelo-info-rapida-forca${index}`}>FC: {(getForca(car, { res: 'numero'})).toFixed(1)} k</div>
        </div>
      </div>
      <div id={`grau${index}`} className="Dashboard-content-Play-game-area-block-grau">
        <span></span>
      </div>  
    </div>
  )
}
  

  // <table id={`table_carro${index}`} className='participantes' cellPadding='0' cellSpacing='0'>
  //   <thead>
  //     <tr><th colSpan='2'>{pilot.nickname} nvl {pilot.nvl}</th></tr>
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <td className='td-principal' id={`td-velocimetro${index}`}>
          // <div className={`aproveitamento aproveitamento${index}`}></div>
          // <img className='velocimetro' src={velocimetro} alt='velocimetro' />
          // <div id={`ponteiro${index}`} className='div-ponteiro'>
          //   <img className='ponteiro' src={ponteiro} alt='ponteiro' />
          // </div>
          // <span id={`velocidade${index}`} className='velocidade'>0 km/h</span>
  //       </td>
  //       <td id={`td-cambio-${index}`}>
          // <div className={`aproveitamento aproveitamento${index}`}></div>
          // <span className='quebra' id={`quebra${index}`}></span>
          // <img id={`cambio${index}`} className='cambio' src={cambio_desligado} alt='cambio' />
          // <span id={`categoria${index}`} className='categoria' title='Car quality'>{getForca(car, { res: 'formatado', index })}</span>
          // <div id={`div-nitro${index}`} className="nitro">
          //   <span id={`nitro${index}`} className='barras-nitros'>
          //     <img id={`chama${index}`} src={chama_nitro} alt='chama do nitro' />
          //   </span>
          //   <span className='efeito-barra-nitro'></span>
          // </div>
  //       </td>
  //     </tr>
  //     <tr className='tr-base'>
  //       <td id={`distancia${index}`} className="td-menor">0.000 m</td>
  //       <td id={`modelo${index}`} className='nomes-modelos'>{car.model} <span><i className="fa fa-eye"></i></span>
          // <div id={`info-rapida-carro${index}`} className='info-rapida'>
          //   <div id={`info-rapida-velocidade${index}`}>Vel.: {(getForca(car, { res: 'attr', value: 0 })).toFixed(1)} km/h</div>
          //   <div id={`info-rapida-aceleracao${index}`}>Ace.: {(getForca(car, { res: 'attr', value: 1 })).toFixed(1)} cav.</div>
          //   <div id={`info-rapida-resistencia${index}`}>Res.: {(getForca(car, { res: 'attr', value: 2 })).toFixed(1)} pt</div>
          //   <div id={`info-rapida-turbo${index}`}>Turbo: {(getForca(car, { res: 'attr', value: 3 })).toFixed(1)} lt</div>
          //   <div id={`info-rapida-forca${index}`}>FC: {(getForca(car, { res: 'numero'})).toFixed(1)} k</div>
          // </div>
  //       </td>
  //     </tr>
  //     <tr className='tr-base'>
        // <td id={`grau${index}`} className="grau" colSpan="2">
        //   <span></span>
        // </td>
  //     </tr>
  //   </tbody>
  // </table>
