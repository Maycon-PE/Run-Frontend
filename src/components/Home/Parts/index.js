import React,  { Component } from 'react'

import './css/index.css'

import { getPart } from './functions'

import { transformAsCoint } from '../../../pages/Dashboard/functions.js'

export default class Parts extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      allParts: getPart(),
      pages: {
        engines: { start: 0, end: 10 },
        transmissions: { start: 0, end: 10 },
        whells: { start: 0, end: 10 },
        cylinders: { start: 0, end: 10 },
        protections: { start: 0, end: 10 },
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
      <div className='Home-Parts'>
        <h1>Peças</h1>
        <table cellSpacing='0' cellPadding='0' className='Home-table'>
          <thead>
            <tr>
              <th colSpan='8'>{this.state.pages.engines.start > 0 ? <span className='Home-table-direction' onClick={() => this.back('engines')}><i className="fa fa-backward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Motores {this.state.pages.engines.end < 50 ? <span className='Home-table-direction' onClick={() => this.next('engines')}><i className="fa fa-forward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
            </tr>
            <tr><th>#</th><th>Nome</th><th>Marchas</th><th>Velocidade</th><th>Aceleração</th><th>Turbo</th><th>Resistência</th><th>Preço</th></tr>
          </thead>
          <tbody>
            {this.state.allParts.engines.map((engine, index) => {
              if (index >= this.state.pages.engines.start && index < this.state.pages.engines.end) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td><td>{engine.name}</td><td>{engine.exchange}</td><td>{engine.speed}</td><td>{engine.acceleration}</td><td>{engine.turbo}</td><td>{engine.resistance}</td><td>R$ {transformAsCoint(engine.price)}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
        <table cellSpacing='0' cellPadding='0' className='Home-table'>
          <thead>
            <tr>
              <th colSpan='7'>{this.state.pages.transmissions.start > 0 ? <span className='Home-table-direction' onClick={() => this.back('transmissions')}><i className="fa fa-backward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Câmbio {this.state.pages.transmissions.end < 50 ? <span className='Home-table-direction' onClick={() => this.next('transmissions')}><i className="fa fa-forward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
            </tr>
            <tr><th>#</th><th>Nome</th><th>Velocidade</th><th>Aceleração</th><th>Turbo</th><th>Resistência</th><th>Preço</th></tr>
          </thead>
          <tbody>
            {this.state.allParts.transmissions.map((transmission, index) => {
              if (index >= this.state.pages.transmissions.start && index < this.state.pages.transmissions.end) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td><td>{transmission.name}</td><td>{transmission.speed}</td><td>{transmission.acceleration}</td><td>{transmission.turbo}</td><td>{transmission.resistance}</td><td>R$ {transformAsCoint(transmission.price)}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
        <table cellSpacing='0' cellPadding='0' className='Home-table'>
          <thead>
            <tr>
              <th colSpan='7'>{this.state.pages.whells.start > 0 ? <span className='Home-table-direction' onClick={() => this.back('whells')}><i className="fa fa-backward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Rodas {this.state.pages.whells.end < 50 ? <span className='Home-table-direction' onClick={() => this.next('whells')}><i className="fa fa-forward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
            </tr>
            <tr><th>#</th><th>Nome</th><th>Velocidade</th><th>Aceleração</th><th>Recuo</th><th>Preço</th></tr>
          </thead>
          <tbody>
            {this.state.allParts.whells.map((circle, index) => {
              if (index >= this.state.pages.whells.start && index < this.state.pages.whells.end) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td><td>{circle.name}</td><td>{circle.speed}</td><td>{circle.acceleration}</td><td>{circle.brake}</td><td>R$ {transformAsCoint(circle.price)}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
        <table cellSpacing='0' cellPadding='0' className='Home-table'>
          <thead>
            <tr>
              <th colSpan='7'>{this.state.pages.cylinders.start > 0 ? <span className='Home-table-direction' onClick={() => this.back('cylinders')}><i className="fa fa-backward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Cilindros {this.state.pages.cylinders.end < 50 ? <span className='Home-table-direction' onClick={() => this.next('cylinders')}><i className="fa fa-forward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
            </tr>
            <tr><th>#</th><th>Nome</th><th>Velocidade</th><th>Aceleração</th><th>Turbo</th><th>Resistência</th><th>Preço</th></tr>
          </thead>
          <tbody>
            {this.state.allParts.cylinders.map((cylinder, index) => {
              if (index >= this.state.pages.cylinders.start && index < this.state.pages.cylinders.end) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td><td>{cylinder.name}</td><td>{cylinder.speed}</td><td>{cylinder.acceleration}</td><td>{cylinder.turbo}</td><td>{cylinder.resistance}</td><td>R$ {transformAsCoint(cylinder.price)}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
        <table cellSpacing='0' cellPadding='0' className='Home-table'>
          <thead>
            <tr>
              <th colSpan='7'>{this.state.pages.protections.start > 0 ? <span className='Home-table-direction' onClick={() => this.back('protections')}><i className="fa fa-backward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Proteções {this.state.pages.protections.end < 50 ? <span className='Home-table-direction' onClick={() => this.next('protections')}><i className="fa fa-forward"></i></span> : <span className='Home-table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
            </tr>
            <tr><th>#</th><th>Nome</th><th>Resistência</th><th>Preço</th></tr>
          </thead>
          <tbody>
            {this.state.allParts.protections.map((protection, index) => {
              if (index >= this.state.pages.protections.start && index < this.state.pages.protections.end) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td><td>{protection.name}</td><td>{protection.resistance}</td><td>R$ {transformAsCoint(protection.price)}</td>
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