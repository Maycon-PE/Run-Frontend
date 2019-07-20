
function setEffect(key = String || Number) {
  document.querySelectorAll(`.Dashboard-Aprimorator-content-inside-body-inside-Sale-info`).forEach(div => div.style.display = 'none')
  const div = document.querySelector(`.thisIsProduct-${key}`)
  div.style.display = 'block'
}

export { setEffect }