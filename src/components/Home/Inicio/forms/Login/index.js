import React, { useState } from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

//Styles
import { FormHeader, FormHeaderLabel, FormMessage, Form, AreaInput, Input } from '../../styles'

import { login, validationEmail, validationPassword, checkInvalid } from '../../functions'

const Login = ({ push: history }) => {
  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const [message, setMessage] = useState('')

  const enter = () => {
    if (email === undefined || password === undefined) {
      setMessage('Preencha os campos!!!')
      return
    }

    if (!validationEmail(email)) {
      checkInvalid('email-login')
      setMessage('Email inválido!!!')
      return
    }

    if (!validationPassword(password)) {
      checkInvalid('password-login')
      setMessage('Senha inválida!!!')
      return
    }

    const formData = { email, password }

    login(formData)
      .then(res => {
        if (!res.status) {
          if (res.message.indexOf('Senha') !== -1) {
            checkInvalid('password-login')
          } else {
            checkInvalid('email-login')
          }
          setMessage(res.message)
          return
        }

        sessionStorage.setItem('token', res.message)
        history.push('/dashboard')
      })
  }

  return (
    <>
      <FormHeader>
        <FormHeaderLabel><span>Login</span> <FormMessage>{message}</FormMessage></FormHeaderLabel>
      </FormHeader>
      <Form onSubmit={e => e.preventDefault()}>
        <AreaInput  verify={() => validationEmail(email)}>
          <Input id='email-login' type='email' name='email' onChange={e => setEmail(e.target.value)} placeholder='Coloque seu email' maxLength='50' required />  
          <label htmlFor='email-login'>Email</label>
        </AreaInput>
        <AreaInput verify={() => validationPassword(password)}>
          <Input id='password-login' type='password' name='password' onChange={e => setPassword(e.target.value)} placeholder='*********' minLength='5' maxLength='15'  required />
          <label htmlFor='password-login'>Senha</label>
        </AreaInput>
        <AwesomeButton className='Inicio-form-inputs-form-btn-submit' size='medium' type='primary' ripple action={enter}>Entrar</AwesomeButton>
      </Form>
    </>
  )
}

export default Login
