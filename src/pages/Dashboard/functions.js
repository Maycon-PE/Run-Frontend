function ajaxUpdate(obj = Object, part = String) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = e => {
      if (xhr.readyState === 4) {
        resolve(JSON.parse(xhr.responseText))
      }
    }

    xhr.open('put', `http://localhost:3001/api/v2/auth/car/${part}`, true)

    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', sessionStorage.getItem('token'))

    xhr.send(JSON.stringify(obj))
  })
}

function changePart(part = String, table = String, field = String, gold = Number, price = Number) {
  if (gold < price) return 

  return new Promise(resolve => {
    const form = { field, part, costs: gold - price }

    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = e => {
      if (xhr.readyState === 4) {
        resolve(JSON.parse(xhr.responseText))
      }
    }

    xhr.open('put', `http://localhost:3001/api/v2/auth/changePart/${table}`, true)

    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', sessionStorage.getItem('token'))

    xhr.send(JSON.stringify(form))
  })
}

function getAllParts() {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = e => {
    if (xhr.readyState === 4) {
      putInSessionStorage(JSON.parse(xhr.responseText))
    }
  }

  xhr.open('get', `http://localhost:3001/getAllParts`, true)

  xhr.setRequestHeader('Content-type', 'application/json')
  // xhr.setRequestHeader('Authorization', sessionStorage.getItem('token'))

  xhr.send()
}

function putInSessionStorage(parts) {
  const partsWaited = ['engines', 'transmissions', 'cylinders', 'whells', 'protections']
  partsWaited.forEach(name => {
    sessionStorage.setItem(name, JSON.stringify(parts.data[name]))
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
    const token = sessionStorage.getItem('token')

    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = e => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        
        const res = JSON.parse(xhr.responseText)
        console.log(res)
        resolve(res)
      }
    }

    xhr.open('post', 'http://localhost:3001/auth', false)

    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', token)

    xhr.send()
  })
}

module.exports = { ajaxUpdate, transformAsCoint, reverseString, auth, getAllParts, changePart }