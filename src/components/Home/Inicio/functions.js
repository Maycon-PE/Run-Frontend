import api from '../../../requests'

function login(formData = Object) {
  return new Promise(resolve => {
    api.post('/login', formData)
    .then(res => resolve(res.data))
    .catch(e => console.log(e))
  })
}

function register(formData = String) {
  return new Promise(resolve => {
    api.post('/createAccount', formData)
      .then(res => resolve(res.data))
      .catch(e => console.log(e))
  })
}

function validationEmail(email = String) {
  if (!/^[a-z0-9.]+@(gmail|hotmail|outlook)+\.[a-z]+(\.[a-z]+)?$/g.test(email)) return false

  return true
}

function validationNickName(nickname = String) {
  if (!Number.isNaN(Number.parseInt(nickname)) || nickname.length < 4) return false

  return true
}

function validationModel(model = String) {
  if (!Number.isNaN(Number.parseInt(model)) || model.length < 4) return false

  return true
}

export { register, login, validationEmail, validationNickName, validationModel }