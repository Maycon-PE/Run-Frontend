
function transformAsCoint(value = String || Number) {
  value = value.toString()
  let dinheiroFormatado = ''

  let letraFrente = 0
  let letraTras = value.length - 1

  do {
    dinheiroFormatado += letraFrente % 3 === 0 && letraFrente !== 0? '.' + value.charAt(letraTras): value.charAt(letraTras)
    
    letraFrente++
    --letraTras
  } while (letraTras >= 0)

  return reverseString(dinheiroFormatado)
}

function reverseString(str){
  let revstr = "";
  for(let i = str.length - 1; i >= 0; i--){
    revstr = revstr + str[i];
  }
  return revstr;
}

function setEffect(key = String || Number) {
  document.querySelectorAll(`.Dashboard-Aprimorator-content-inside-body-inside-Sale-info`).forEach(div => div.style.display = 'none')
  const div = document.querySelector(`.thisIsProduct-${key}`)
  div.style.display = 'block'
}

module.exports = { transformAsCoint, reverseString, setEffect }