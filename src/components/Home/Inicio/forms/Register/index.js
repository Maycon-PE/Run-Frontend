import React, { useState } from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

//Styles
import { FormHeader, FormHeaderLabel, FormMessage, Form, AreaInput, Input, Select } from '../../styles'

import  { countries } from './data/defaults.json'
import { register, validationEmail, validationNickName, validationModel, checkInvalid } from '../../functions'

const Register = ({ push: history }) => {
  const [email, setEmail] = useState(undefined)
  const [name, setName] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const [password2, setPassword2] = useState(undefined)
  const [nickname, setNickname] = useState(undefined)
  const [model, setModel] = useState(undefined)
  const [message, setMessage] = useState('')

  const confirm = () => {
    if (email === undefined || name === undefined || password === undefined || nickname === undefined || model === undefined) {
      setMessage('Preencha os campos (todos obrigatórios)')
      return
    }

    if (!validationEmail(email)) {
      checkInvalid('email-register')
      const message = 'email: ...' + email.slice(email.indexOf('@'), email.length) + ' é inválido'

      setMessage(message)
      return
    }

    if (!validationNickName(nickname)) {
      checkInvalid('nickname-register')
      setMessage('Nickname inválido')
      return
    }

    if (!validationModel(model)) {
      checkInvalid('model-register')
      setMessage('Nome do carro inválido')
      return
    }

    if (password.length < 5) return

    if (password !== password2) {
      checkInvalid('password-2-register')
      setMessage('Senhas diferentes')
      return
    }

    const genre = document.getElementById('genre-register').value
    const country = document.getElementById('country-register').value

    const formData = { 
      name, email, password,
      nickname, genre, country,
      model
    }

    register(formData)
      .then(res => {
        if (!res.status) { 
          setMessage(res.message) 
          
          return
        } 

        sessionStorage.setItem('token', res.message)
        history.push('/dashboard')
      })
  }

  const renderOptions = continentes => {
    const paises = []

    countries.forEach(({ name, cn }, indice) => {
      if (cn === continentes) paises.push(<option key={indice} value={name}>{name}</option>)
    })

    return paises
  }

  return (
    <>
      <FormHeader>
        <FormHeaderLabel><span>Cadastro</span> <FormMessage>{message}</FormMessage></FormHeaderLabel>
      </FormHeader>
      <Form onSubmit={e => e.preventDefault()}>
        <AreaInput>
          <Input id='nome-register' type='text' name='name' onChange={e => setName(e.target.value)} placeholder='Seu nome' required />  
          <label htmlFor='nome-register'>Nome</label>
        </AreaInput>
        <AreaInput>
          <Input id='email-register' type='email' name='email' onChange={e => setEmail(e.target.value)} placeholder='...@...' required />  
          <label htmlFor='email-register'>Email</label>
        </AreaInput>
        <AreaInput double>
          <AreaInput>
            <Input id='model-register' type='text' name='carName' onChange={e => setModel(e.target.value)} placeholder='Nomeie seu carro' required />  
            <label htmlFor='model-register'>Nome do carro</label>
          </AreaInput>
          <AreaInput>
            <Input id='nickname-register' type='text' name='nickname' onChange={e => setNickname(e.target.value)} placeholder='Seu nome no jogo' required />  
            <label htmlFor='nickname-register'>Apelido</label>
          </AreaInput>
        </AreaInput>
        <AreaInput double>
          <AreaInput>
            <Input id='password-register' type='password' name='password' onChange={e => setPassword(e.target.value) } placeholder='*********' minLength='5' maxLength='15' required />
            <label htmlFor='password-register'>Senha</label>
          </AreaInput>
          <AreaInput>
            <Input id='password-2-register' type='password' name='password2' onChange={e => setPassword2(e.target.value) } placeholder='*********' minLength='5' maxLength='15' required />
            <label htmlFor='password-2-register'>Confirme a senha</label>
          </AreaInput>
        </AreaInput>
        <AreaInput double>
          <AreaInput>
            <Select name='genre' id='genre-register' required>
              <optgroup label='Gêneros'>
                <option value='Masculino'>Masculino</option>
                <option value='Femilino'>Feminino</option>
              </optgroup>
            </Select>
            <label htmlFor='genre-register'>Gênero</label>
          </AreaInput>
          <AreaInput>            
            <Select name='country' id='country-register' required>
              <optgroup label='América'>
                {renderOptions('AM')}
              </optgroup>
              <optgroup label='Europa'>
                {renderOptions('EU')}
              </optgroup>
              <optgroup label='Ásia'>
                {renderOptions('A')}
              </optgroup>
              <optgroup label='Africa'>
                {renderOptions('AF')}
              </optgroup>
            </Select>
            <label htmlFor='country-register'>Pais *Fictício</label>
          </AreaInput>
        </AreaInput>
        <AwesomeButton size='medium' type='secondary' ripple action={confirm}>Registrar</AwesomeButton>
      </Form>
    </>
  )
}


export default Register

// export default class Register extends Component {

//   constructor(props) {
//     super(props)

//     this.state = { history: this.props.push, message: '' }
//   }

//   register = () => {

  //   if (this.email === undefined || this.name === undefined || this.password === undefined || this.nickname === undefined) {
  //     this.setState({ message: 'Preencha os campos (todos obrigatórios)' })
  //     return
  //   }

  //   if (!validationEmail(this.email)) {
  //     checkInvalid('email-register')
  //     const message = 'email: ...' + this.email.slice(this.email.indexOf('@'), this.email.length) + ' é inválido'

  //     this.setState({ message })
  //     return
  //   }

  //   if (!validationNickName(this.nickname)) {
  //     checkInvalid('nickname-register')
  //     this.setState({ message: 'Nickname inválido' })
  //     return
  //   }

  //   if (!validationModel(this.carName)) {
  //     checkInvalid('model-register')
  //     this.setState({ message: 'Nome do carro inválido' })
  //     return
  //   }

  //   if (this.password.length < 5) return

  //   if (this.password !== this.password2) {
  //     checkInvalid('password-2-register')
  //     this.setState({ message: 'Senhas diferentes' })
  //     return
  //   }

  //   const genre = document.getElementById('genre-register').value
  //   const country = document.getElementById('country-register').value

  //   const formData = { 
  //     name: this.name, email: this.email,
  //     password: this.password, nickname: this.nickname,
  //     genre, country, model: this.carName
  //   }

  //   register(formData)
  //     .then(res => {
  //       if (!res.status) {
  //         if (res.error) {
  //           const key = res.error.slice(res.error.indexOf('key') + 5, res.error.length - 1)
  //           checkInvalid(`${key}-register`)
  //           this.setState({ message: key + ' já existe' })
  //         } else { this.setState({ message: res.message }) }
          
  //         return
  //       } 

  //       sessionStorage.setItem('token', res.message)
  //       this.state.history.push('/dashboard')
  //     })
  // }

//   renderOptions = continentes => {
//     const paises = []

//     countries.forEach(({ name, cn }, indice) => {
//       if (cn === continentes) paises.push(<option key={indice} value={name}>{name}</option>)
//     })

//     return paises
//   }

//   render() {
//     return (
//       <div className='Inicio-form-inputs-area-form'>
//         <FormHeader className='Inicio-form-inputs-form-header'>
//           <FormHeaderLabel className='Inicio-form-inputs-form-header-label'>Cadastro <FormMessage className='Inicio-form-inputs-form-header-label-span'>{this.state.message}</FormMessage></FormHeaderLabel>
//         </FormHeader>
//         <Form className='Inicio-form-inputs-form' onSubmit={e => e.preventDefault()}>
//           <AreaInput className='Inicio-form-inputs-form-area-input'>
//             <label htmlFor='nome-register'>Nome</label>
//             <Input id='nome-register' type='text' name='name' onChange={e => this.name = e.target.value} placeholder='Primeiro e segundo nome' required />  
//           </AreaInput>
//           <AreaInput className='Inicio-form-inputs-form-area-input'>
//             <label htmlFor='email-register'>Email</label>
//             <Input id='email-register' type='email' name='email' onChange={e => this.email = e.target.value} placeholder='...@...' required />  
//           </AreaInput>
//           <AreaInput double className='Inicio-form-inputs-form-area-inputs'>
//             <AreaInput className='Inicio-form-inputs-form-area-input'>
//               <label htmlFor='model-register'>Nome do carro</label>
//               <Input id='model-register' type='text' name='carName' onChange={e => this.carName = e.target.value} placeholder='Nomeie seu carro' required />  
//             </AreaInput>
//             <AreaInput className='Inicio-form-inputs-form-area-input'>
//               <label htmlFor='nickname-register'>Nickname</label>
//               <Input id='nickname-register' type='text' name='nickname' onChange={e => this.nickname = e.target.value} placeholder='Seu nome no jogo' required />  
//             </AreaInput>
//           </AreaInput>
//           <AreaInput double className='Inicio-form-inputs-form-area-inputs'>
//             <AreaInput className='Inicio-form-inputs-form-area-input'>
//               <label htmlFor='password-register'>Senha</label>
//               <Input id='password-register' type='password' name='password' onChange={e => this.password = e.target.value } placeholder='*********' minLength='5' maxLength='15' required />
//             </AreaInput>
//             <AreaInput className='Inicio-form-inputs-form-area-input'>
//               <label htmlFor='password-2-register'>Confirme a senha</label>
//               <Input id='password-2-register' type='password' name='password2' onChange={e => this.password2 = e.target.value } placeholder='*********' minLength='5' maxLength='15' required />
//             </AreaInput>
//           </AreaInput>
//           <AreaInput double className='Inicio-form-inputs-form-area-selects'>
//             <AreaInput className='Inicio-form-inputs-form-area-select'>
//               <label htmlFor='genre-register'>Gênero</label>
//               <Select name='genre' id='genre-register' onChange={e => this.genre = e.target.value} required>
//                 <optgroup label='Gêneros'>
//                   <option value='Masculino'>Masculino</option>
//                   <option value='Femilino'>Feminino</option>
//                 </optgroup>
//               </Select>
//             </AreaInput>
//             <AreaInput className='Inicio-form-inputs-form-area-select'>
//               <label htmlFor='country-register'>Pais *Fictício</label>
//               <Select name='country' id='country-register' onChange={e => this.country = e.target.value} required>
//                 <optgroup label='América'>
//                   {this.renderOptions('AM')}
//                 </optgroup>
//                 <optgroup label='Europa'>
//                   {this.renderOptions('EU')}
//                 </optgroup>
//                 <optgroup label='Ásia'>
//                   {this.renderOptions('A')}
//                 </optgroup>
//                 <optgroup label='Africa'>
//                   {this.renderOptions('AF')}
//                 </optgroup>
//               </Select>
//             </AreaInput>
//           </AreaInput>
//           <AwesomeButton className='Inicio-form-inputs-form-btn-submit' size='medium' type='secondary' ripple action={this.register}>Registrar</AwesomeButton>
//         </Form>
//       </div>
//     )
//   }
// }