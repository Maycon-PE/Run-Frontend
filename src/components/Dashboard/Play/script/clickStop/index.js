export default function () {
  document.querySelector('.Dashboard-content-Play-divChallenge-refresh').style.pointerEvents = 'painted'
  document.querySelector('#btn-stop').style.pointerEvents = 'none'
  document.querySelector('.Dashboard-content-Play-divChallenge-buttom-area').style.pointerEvents = 'painted'
  document.querySelector('.Header-limit-right-menu').style.pointerEvents = 'painted'

  document.querySelectorAll('.barras-nitros > img').forEach(img => img.style.display = 'none')
}
