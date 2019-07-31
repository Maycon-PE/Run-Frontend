export default function (qtd) {
  // document.querySelector('.Dashboard-content-Play-divChallenge').style.pointerEvents = 'none'
  // document.querySelector('.Header-limit-right-menu').style.pointerEvents = 'none'

  document.querySelectorAll('.nitro').forEach(div => div.style.display = 'block')

  document.querySelectorAll('.efeito-barra-nitro').forEach(span => span.style.display = 'block')

  resizeDiv(qtd)
}

function resizeDiv(qtd = Number) {
  let p = 0
  let loop = 0
  do {
    document.querySelector(`.posicao${loop}`).style.top = `${p}px`
    p += 20
    loop++
  } while(loop < qtd)
}
