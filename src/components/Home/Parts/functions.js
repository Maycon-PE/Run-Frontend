function getPart() {
  const engines = JSON.parse(sessionStorage.getItem('engines'))
  const transmissions = JSON.parse(sessionStorage.getItem('transmissions'))
  const cylinders = JSON.parse(sessionStorage.getItem('cylinders'))
  const whells = JSON.parse(sessionStorage.getItem('whells'))
  const protections = JSON.parse(sessionStorage.getItem('protections'))

  return { engines, transmissions, cylinders, whells, protections }
}

export { getPart }