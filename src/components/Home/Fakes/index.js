import React, { useState } from 'react'

//Estilos
import { Table } from '../../../styles'
import { Home } from '../../../pages/home/styles'

import { getBots } from './functions'

const Fakes = () => {
  const allBots = getBots()
  const [pages, setPages] = useState({ pilots: { start: 0, end: 10 }, cars: { start: 0, end: 10 } })

  const back = part => {
    if (pages[part].start === 0) return
    const newPag = { ...pages }
    newPag[part].start -= 10
    newPag[part].end -= 10

    setPages(newPag)
  }

  const next = part => {
    if (pages[part].end === 50) return
    const newPag = { ...pages }
    newPag[part].start += 10
    newPag[part].end += 10

    setPages(newPag)
  }

  return (
    <Home className='Home-Fakes'>
      <h1>Players padrões</h1>
      <Table cellSpacing='0' cellPadding='0' className='Home-table'>
        <thead>
          <tr>
            <th colSpan='6'>{pages.pilots.start > 0 ? <span className='table-direction' onClick={() => back('pilots')}><i className="fa fa-backward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Pilotos {pages.pilots.end < 50 ? <span className='table-direction' onClick={() => next('pilots')}><i className="fa fa-forward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
          </tr>
          <tr><th>#</th><th>Nome</th><th>Gênero</th><th>Pais</th><th>Nível</th><th>Carro</th></tr>
        </thead>
        <tbody>
          {allBots.pilots.map((pilot, index) => (
            (index >= pages.pilots.start && index < pages.pilots.end) && (
              <tr key={`pilot-${pilot.id}`}>
                <td>{pilot.id}</td><td>{pilot.nickname}</td><td>{pilot.genre}</td><td>{pilot.country}</td><td>{pilot.nvl}</td><td>{allBots.cars.map(({ id, model }) => {if (id === pilot.car_id) return model })}</td>
              </tr>
            )
          ))}
        </tbody>
      </Table>
      <Table cellSpacing='0' cellPadding='0' className='Home-table'>
        <thead>
          <tr>
            <th colSpan='7'>{pages.cars.start > 0 ? <span className='table-direction' onClick={() => back('cars')}><i className="fa fa-backward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>} Carros {pages.cars.end < 50 ? <span className='table-direction' onClick={() => next('cars')}><i className="fa fa-forward"></i></span> : <span className='table-direction pointerDefault'><i className="fa fa-circle"></i></span>}</th>
          </tr>
          <tr><th>#</th><th>Modelo</th><th>Motor</th><th>Câmbio</th><th>Cilindro</th><th>Rodas</th><th>Proteção</th></tr>
        </thead>
        <tbody>
          {allBots.cars.map((car, index) => (
            (index >= pages.cars.start && index < pages.cars.end) && (
              <tr key={`car-${car.id}`}>
                <td>{car.id}</td><td>{car.model}</td><td>{car.engine}</td><td>{car.transmission}</td><td>{car.cylinder}</td><td>{car.whells}</td><td>{car.protection}</td>
              </tr>
            )
          ))}
        </tbody>
      </Table>
    </Home>
  )
}

export default Fakes
