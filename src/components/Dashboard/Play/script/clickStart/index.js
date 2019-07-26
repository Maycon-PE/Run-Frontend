export default function () {
  document.querySelector('.Dashboard-content-Play-divChallenge-refresh').style.pointerEvents = 'none'
  document.querySelector('.Dashboard-content-Play-divChallenge-buttom-area').style.pointerEvents = 'none'
  document.querySelector('.Header-limit-right-menu').style.pointerEvents = 'none'

  document.querySelectorAll('.nitro').forEach(div => div.style.display = 'block')

  document.querySelectorAll('.efeito-barra-nitro').forEach(span => span.style.display = 'block')
}
