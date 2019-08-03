export default function (cars, limite) {
  let height = 0
  for (let h = 0; h <= cars.length; h++) {
    height += 21
  }
  document.getElementById('lideres-table').style.height = `${height}px`
}
