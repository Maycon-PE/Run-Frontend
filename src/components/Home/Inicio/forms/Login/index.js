import React, { useState } from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

//Styles
import { FormHeader, FormHeaderLabel, FormMessage, Form, AreaInput, Input } from '../../styles'

import { login, checkInvalid } from '../../functions'

const Login = ({ push: history }) => {
  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const [message, setMessage] = useState('')

  const enter = () => {
    if (email === undefined || password === undefined) {
      setMessage('Preencha os campos!!!')
      return
    }

    if (!/^[a-z0-9.]+@(gmail|hotmail|outlook)+\.[a-z]+(\.[a-z]+)?$/g.test(email)) {
      checkInvalid('email-login')
      setMessage('Email inválido!!!')
      return
    }

    if (password.length < 5) {
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
      <FormHeader className='Inicio-form-inputs-form-header'>
        <FormHeaderLabel className='Inicio-form-inputs-form-header-label'><span>Login</span> <FormMessage className='Inicio-form-inputs-form-header-label-span'>{message}</FormMessage></FormHeaderLabel>
      </FormHeader>
      <Form className='Inicio-form-inputs-form' onSubmit={e => e.preventDefault()}>
        <AreaInput className='Inicio-form-inputs-form-area-input'>
          <Input id='email-login' type='email' name='email' onChange={e => setEmail(e.target.value)} placeholder='Coloque seu email' required />  
          <label htmlFor='email-login'>Email</label>
        </AreaInput>
        <AreaInput className='Inicio-form-inputs-form-area-input'>
          <Input id='password-login' type='password' name='password' onChange={e => setPassword(e.target.value)} placeholder='*********' minLength='5' maxLength='15'  required />
          <label htmlFor='password-login'>Senha</label>
        </AreaInput>
        <AwesomeButton className='Inicio-form-inputs-form-btn-submit' size='medium' type='primary' ripple action={enter}>Entrar</AwesomeButton>
      </Form>
    </>
  )
}

export default Login
