import api from '../../../requests'

function getAttr(obj = Object, attr = String) {
  return obj[attr]? obj[attr].toFixed(1): (0).toFixed(1)
}

function getJoin(obj = Object, attr = String) {
  let tot = 0
  if (JSON.parse(obj.engine_object)[attr]) tot += JSON.parse(obj.engine_object)[attr]
  if (JSON.parse(obj.transmission_object)[attr]) tot += JSON.parse(obj.transmission_object)[attr]
  if (JSON.parse(obj.whells_object)[attr]) tot += JSON.parse(obj.whells_object)[attr]
  if (JSON.parse(obj.cylinder_object)[attr]) tot += JSON.parse(obj.cylinder_object)[attr]
  if (JSON.parse(obj.protection_object)[attr]) tot += JSON.parse(obj.protection_object)[attr]
  
  return tot.toFixed(1)
}

function getFc(obj = Object) {
  const attr = ['speed', 'acceleration', 'turbo', 'resistance']
  let fc = 0

  attr.forEach(v => {
    if (JSON.parse(obj.engine_object)[v]) fc += JSON.parse(obj.engine_object)[v]
    if (JSON.parse(obj.transmission_object)[v]) fc += JSON.parse(obj.transmission_object)[v]
    if (JSON.parse(obj.whells_object)[v]) fc += JSON.parse(obj.whells_object)[v]
    if (JSON.parse(obj.cylinder_object)[v]) fc += JSON.parse(obj.cylinder_object)[v]
    if (JSON.parse(obj.protection_object)[v]) fc += JSON.parse(obj.protection_object)[v]
  })

  return fc.toFixed(1)
}

function checkPassword(state, { password }) {
  return new Promise(resolve => {
    api.post('/auth/confirm', { password }, { headers: { 'Authorization': sessionStorage.getItem('token'), 'Content-type': 'application/json'} })
      .then(({ data }) => {
        if (data.status) {
          state.valid = true
          state.modal = false
          state.message = data.message
        } else {
          state.waiting = false
          state.message = data.message
        }
        resolve(state)
      })
      .catch(e => console.log(e))   
  })
}

function doRemove() {
  return new Promise(resolve => {
    api.delete('/auth/delete', { headers: { 'Authorization': sessionStorage.getItem('token'), 'Content-type': 'application/json'} })
      .then(({ data }) => {
        resolve(data.status)
      })
      .catch(e => console.log(e))
  })
}

export { getAttr, getJoin, getFc, checkPassword, doRemove }