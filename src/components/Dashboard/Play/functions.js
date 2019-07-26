import React from 'react'

function setDistance(nvl = Number) {
  if (nvl < 10) return 1
  if (nvl < 20) return 2
  if (nvl < 30) return 3
  if (nvl < 40) return 4
  if (nvl <= 50) return 5
}

function renderP(pilots = Array) {
  const ps = []
  pilots.forEach(({ pilot, car }, index) => ps.push(<p key={index} id={`carro${index}`} className={`posicao${index}`}>0° - {pilot.nickname} [{car.model}] - 0 km/h</p>))

  return ps
}

export { setDistance, renderP }