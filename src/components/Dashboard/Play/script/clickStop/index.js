export default function () {
  document.querySelector('#btn-stop').style.pointerEvents = 'none'

  document.querySelectorAll('.barras-nitros > img').forEach(img => img.style.display = 'none')
}
