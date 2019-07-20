import React,  { Component } from 'react'

import './css/index.css'

import { getBots } from './functions'

export default class Fakes extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      allBots: getBots(),
      pages: {
        pilots: { start: 0, end: 10 },
        cars: { start: 0, end: 10 }
      }
    }
  }

  back = part => {
    if (this.state.pages[part].start === 0) return
    const pages = { ...this.state.pages }
    pages[part].start -= 10
    pages[part].end -= 10

    this.setState({ pages })
  }

  next = part => {
    if (this.state.pages[part].end === 50) return
    const pages = { ...this.state.pages }
    pages[part].start += 10
    pages[part].end += 10

    this.setState({ pages })
  }

  render() {
    return (
      <div className='Home-Fakes'>
        <h1>Players padrões</h1>
        <table cellSpacing='0' cellPadding='0' className='Home-table'>
          <thead>
            <tr>
              <th colSpan='6'>{this.state.pages.pilots.start > 0 ? <span className='Home-table-direction' onClick={() => this.back('pilots')}><i className="fa fa-backward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Pilotos {this.state.pages.pilots.end < 50 ? <span className='Home-table-direction' onClick={() => this.next('pilots')}><i className="fa fa-forward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
            </tr>
            <tr><th>#</th><th>Nome</th><th>Gênero</th><th>Pais</th><th>Nível</th><th>Carro</th></tr>
          </thead>
          <tbody>
            {this.state.allBots.pilots.map((pilot, index) => {
              if (index >= this.state.pages.pilots.start && index < this.state.pages.pilots.end) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td><td>{pilot.name}</td><td>{pilot.genre}</td><td>{pilot.country}</td><td>{pilot.nvl}</td><td>{this.state.allBots.cars.map(({ id, model }) => {if (id === pilot.car_id) return model} )}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
        <table cellSpacing='0' cellPadding='0' className='Home-table'>
          <thead>
            <tr>
              <th colSpan='7'>{this.state.pages.cars.start > 0 ? <span className='Home-table-direction' onClick={() => this.back('cars')}><i className="fa fa-backward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Carros {this.state.pages.cars.end < 50 ? <span className='Home-table-direction' onClick={() => this.next('cars')}><i className="fa fa-forward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
            </tr>
            <tr><th>#</th><th>Modelo</th><th>Motor</th><th>Câmbio</th><th>Cilindro</th><th>Rodas</th><th>Proteção</th></tr>
          </thead>
          <tbody>
            {this.state.allBots.cars.map((car, index) => {
              if (index >= this.state.pages.cars.start && index < this.state.pages.cars.end) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td><td>{car.model}</td><td>{car.engine}</td><td>{car.transmission}</td><td>{car.cylinder}</td><td>{car.whells}</td><td>{car.protection}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
