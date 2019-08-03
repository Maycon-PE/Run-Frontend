import React, { useState } from 'react'

//Estilos
import { Table } from '../../../styles'
import { Home } from '../../../pages/home/styles'

import { getPart } from './functions'

import { transformAsCoint } from '../../../pages/Dashboard/functions.js'

const Parts = () => {
  const allParts = getPart()
  const [pages, setPages] = useState({
    engines: { start: 0, end: 10 },
    transmissions: { start: 0, end: 10 },
    whells: { start: 0, end: 10 },
    cylinders: { start: 0, end: 10 },
    protections: { start: 0, end: 10 } 
  })

  const back = part => {
    if (pages[part].start === 0) return
    const newPages = { ...pages }
    newPages[part].start -= 10
    newPages[part].end -= 10

    setPages(newPages)
  }

  const next = part => {
    if (pages[part].end === 50) return
    const newPages = { ...pages }
    newPages[part].start += 10
    newPages[part].end += 10

    setPages(newPages)
  }

  return (
    <Home className='Home-Parts'>
      <h1>Peças</h1>
      <Table cellSpacing='0' cellPadding='0' className='Home-table'>
        <thead>
          <tr>
            <th colSpan='8'>{pages.engines.start > 0 ? <span className='table-direction' onClick={() => back('engines')}><i className="fa fa-backward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Motores {pages.engines.end < 50 ? <span className='table-direction' onClick={() => next('engines')}><i className="fa fa-forward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
          </tr>
          <tr><th>#</th><th>Nome</th><th>Marchas</th><th>Velocidade</th><th>Aceleração</th><th>Turbo</th><th>Resistência</th><th>Preço</th></tr>
        </thead>
        <tbody>
          {allParts.engines.map((engine, index) => (
            index >= pages.engines.start && index < pages.engines.end && (
              <tr key={index}>
                <td>{index + 1}</td><td>{engine.name}</td><td>{engine.exchange}</td><td>{engine.speed}</td><td>{engine.acceleration}</td><td>{engine.turbo}</td><td>{engine.resistance}</td><td>{transformAsCoint(engine.price)}</td>
              </tr>
            )
          ))}
        </tbody>
      </Table>
      <Table cellSpacing='0' cellPadding='0' className='Home-table'>
        <thead>
          <tr>
            <th colSpan='7'>{pages.transmissions.start > 0 ? <span className='table-direction' onClick={() => back('transmissions')}><i className="fa fa-backward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Câmbio {pages.transmissions.end < 50 ? <span className='table-direction' onClick={() => next('transmissions')}><i className="fa fa-forward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
          </tr>
          <tr><th>#</th><th>Nome</th><th>Velocidade</th><th>Aceleração</th><th>Resistência</th><th>Preço</th></tr>
        </thead>
        <tbody>
          {allParts.transmissions.map((transmission, index) => (
            index >= pages.transmissions.start && index < pages.transmissions.end && (
              <tr key={index}>
                <td>{index + 1}</td><td>{transmission.name}</td><td>{transmission.speed}</td><td>{transmission.acceleration}</td><td>{transmission.resistance}</td><td>{transformAsCoint(transmission.price)}</td>
              </tr>
            )
          ))}
        </tbody>
      </Table>
      <Table cellSpacing='0' cellPadding='0' className='Home-table'>
        <thead>
          <tr>
            <th colSpan='7'>{pages.whells.start > 0 ? <span className='table-direction' onClick={() => back('whells')}><i className="fa fa-backward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Rodas {pages.whells.end < 50 ? <span className='table-direction' onClick={() => next('whells')}><i className="fa fa-forward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
          </tr>
          <tr><th>#</th><th>Nome</th><th>Velocidade</th><th>Aceleração</th><th>Recuo</th><th>Preço</th></tr>
        </thead>
        <tbody>
          {allParts.whells.map((circle, index) => (
            index >= pages.whells.start && index < pages.whells.end && (
                <tr key={index}>
                  <td>{index + 1}</td><td>{circle.name}</td><td>{circle.speed}</td><td>{circle.acceleration}</td><td>{circle.brake}</td><td>{transformAsCoint(circle.price)}</td>
                </tr>
              )
          ))}
        </tbody>
      </Table>
      <Table cellSpacing='0' cellPadding='0' className='Home-table'>
        <thead>
          <tr>
            <th colSpan='7'>{pages.cylinders.start > 0 ? <span className='table-direction' onClick={() => back('cylinders')}><i className="fa fa-backward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Cilindros {pages.cylinders.end < 50 ? <span className='table-direction' onClick={() => next('cylinders')}><i className="fa fa-forward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
          </tr>
          <tr><th>#</th><th>Nome</th><th>Velocidade</th><th>Aceleração</th><th>Turbo</th><th>Resistência</th><th>Preço</th></tr>
        </thead>
        <tbody>
          {allParts.cylinders.map((cylinder, index) => (
            index >= pages.cylinders.start && index < pages.cylinders.end && (
              <tr key={index}>
                <td>{index + 1}</td><td>{cylinder.name}</td><td>{cylinder.speed}</td><td>{cylinder.acceleration}</td><td>{cylinder.turbo}</td><td>{cylinder.resistance}</td><td>{transformAsCoint(cylinder.price)}</td>
              </tr>
            )
         ))}
        </tbody>
      </Table>
      <Table cellSpacing='0' cellPadding='0' className='Home-table'>
        <thead>
          <tr>
            <th colSpan='7'>{pages.protections.start > 0 ? <span className='table-direction' onClick={() => back('protections')}><i className="fa fa-backward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Proteções {pages.protections.end < 50 ? <span className='table-direction' onClick={() => next('protections')}><i className="fa fa-forward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
          </tr>
          <tr><th>#</th><th>Nome</th><th>Resistência</th><th>Preço</th></tr>
        </thead>
        <tbody>
          {allParts.protections.map((protection, index) => (
            index >= pages.protections.start && index < pages.protections.end && (
              <tr key={index}>
                <td>{index + 1}</td><td>{protection.name}</td><td>{protection.resistance}</td><td>{transformAsCoint(protection.price)}</td>
              </tr>
            )
          ))}
        </tbody>
      </Table>
    </Home>      
  )
}

export default Parts
