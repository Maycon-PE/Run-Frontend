import api from '../../requests'

function updateMyCar({ auth } = Object, obj = Object, part = String) {
  return new Promise(resolve => {
    api.put(`/auth/car/${part}`, obj, { headers: { 'Authorization': sessionStorage.getItem('token'), 'Content-type': 'application/json'} })
      .then(({ data }) => {
        auth.user.gold = data.gold
        auth.car[part] = data.part
        resolve(auth)
      })
      .catch(e => console.log(e))
  })
}

function changePart({ auth = Object } = Object, part = String, table = String, field = String, gold = Number, price = Number) {
  if (gold < price) return 

  return new Promise(resolve => {
    const form = { field, part, costs: gold - price }

    api.put(`/auth/changePart/${table}`, form, { headers: { 'Authorization': sessionStorage.getItem('token'), 'Content-type': 'application/json'} })
      .then(({ data }) => {
        auth.user.gold = data.gold
        auth.car = data.car
        resolve(auth)
      })
      .catch(e => console.log(e))
  })
}

function changePhoto({ auth = Object, file = String } = Object) {
  return new Promise(resolve => {
    const formData = new FormData()
    formData.append('image', file)
    api.put('/auth/profile', formData, { headers: { 'Authorization': sessionStorage.getItem('token'), 'Content-type': 'multipart/form-data' } })
      .then(({ data }) => {
        auth.user.src = data.src
        resolve(auth)
      })
      .catch(e => console.log(e))
  })
}

function withdrawal({ auth = Object, gold = Number } = Object) {
  return new Promise(resolve => {
    api.put('/auth/withdrawal', { gold }, { headers: { 'Authorization': sessionStorage.getItem('token'), 'Content-type': 'application/json'} })
    .then(({ data }) => {
      auth.user.gold = data.gold
      resolve(auth)
    })
    .catch(e => console.log(e))
  })
}

function winOrLose({ auth } = Object, { gold, xp } = Object) {
  return new Promise(resolve => {
    api.put('/auth/winOrLose', { gold, xp }, { headers: { 'Authorization': sessionStorage.getItem('token'), 'Content-type': 'application/json'} })
      .then(({ data }) => {
        const { xp, gold, limit_xp, nvl } = data
        auth.user.xp = xp
        auth.user.gold = gold
        auth.user.limit_xp = limit_xp
        auth.user.nvl = nvl
        resolve(auth)
      })
  })
}

function transformAsCoint(value = String || Number) {
  value = value.toString()
  let dinheiroFormatado = ''

  let letraFrente = 0
  let letraTras = value.length - 1

  do {
    dinheiroFormatado += letraFrente % 3 === 0 && letraFrente !== 0? Number.isInteger(Number.parseInt(value.charAt(letraTras)))? '.' + value.charAt(letraTras): value.charAt(letraTras): value.charAt(letraTras)
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

function adv() {
  return new Promise(resolve => {
    api.get(`/auth/adversary`, { headers: { 'Authorization': sessionStorage.getItem('token'), 'Content-type': 'application/json'} })
    .then(res => resolve(res.data))
  })
}

function firstLitterToUpperCase(word = String) {
  return word.charAt(0).toUpperCase() + word.slice(1, word.length)
}

function partSelected(selected = Number) {
  document.querySelector('.Dashboard-Aprimorator-parts-ul').childNodes.forEach((li, indice) => {
    if (selected === indice) {
      li.style.borderBottom = '1.5px solid #fff'
      li.style.borderTop = '1.5px solid #fff'
    } else {
      li.style.border = '1px solid transparent'
    }
  })
}

export { updateMyCar, transformAsCoint, reverseString, auth, changePart, firstLitterToUpperCase, changePhoto, adv, partSelected, withdrawal, winOrLose  }