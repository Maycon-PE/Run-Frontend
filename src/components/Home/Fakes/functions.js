function getBots() {
  const pilots = JSON.parse(sessionStorage.getItem('bots'))
  const cars = JSON.parse(sessionStorage.getItem('cars'))

  return { pilots, cars }
}

export { getBots }