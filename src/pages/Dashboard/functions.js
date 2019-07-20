import api from '../../requests'

function updateMyCar(obj = Object, part = String) {
  return new Promise(resolve => {
    api.put(`/auth/car/${part}`, obj, { headers: { 'Authorization': sessionStorage.getItem('token') } })
      .then(res => resolve(res.data))
      .catch(e => console.log(e))
  })
}

function changePart(part = String, table = String, field = String, gold = Number, price = Number) {
  if (gold < price) return 

  return new Promise(resolve => {
    const form = { field, part, costs: gold - price }

    api.put(`/auth/changePart/${table}`, form, { headers: { 'Authorization': sessionStorage.getItem('token') } })
      .then(res => resolve(res.data))
      .catch(e => console.log(e))
  })
}

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

function auth() {
  return new Promise(resolve => {
    api.post('/auth', {}, { headers: { 'Authorization': sessionStorage.getItem('token') } })
      .then(res => resolve(res.data))
      .catch(e => console.log(e))
  })
}

function firstLitterToUpperCase(word = String) {
  return word.charAt(0).toUpperCase() + word.slice(1, word.length)
}

export { updateMyCar, transformAsCoint, reverseString, auth, changePart, firstLitterToUpperCase  }