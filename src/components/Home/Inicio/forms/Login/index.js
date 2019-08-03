import React, { Component } from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

//Styles
import { FormHeader, FormHeaderLabel, FormMessage, Form, AreaInput, Input } from '../../styles'

import { login, checkInvalid } from '../../functions'

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = { history: props.push, message: '' }
  }

  sign = () => {
    if (this.email === undefined || this.password === undefined) {
      this.setState({ message: 'Preencha os campos' })
      return
    }

    if (!/^[a-z0-9.]+@(gmail|hotmail|outlook)+\.[a-z]+(\.[a-z]+)?$/g.test(this.email)) {
      checkInvalid('email-login')
      this.setState({ message: 'Email inválido!' })
      return
    }

    if (this.password.length < 5) {
      checkInvalid('password-login')
      this.setState({ message: 'Senha inválida' })
      return
    }

    const formData = { email: this.email, password: this.password }

    login(formData)
      .then(res => {
        if (!res.status) {
          if (res.message.indexOf('Senha') !== -1) {
            checkInvalid('password-login')
          } else {
            checkInvalid('email-login')
          }
          this.setState({ message: res.message })
          return
        }

        sessionStorage.setItem('token', res.message)
        this.state.history.push('/dashboard')
      })
  }

  render() {
    return (
      <div className='Inicio-form-inputs-area-form'>
        <FormHeader className='Inicio-form-inputs-form-header'>
          <FormHeaderLabel className='Inicio-form-inputs-form-header-label'>Login <FormMessage className='Inicio-form-inputs-form-header-label-span'>{this.state.message}</FormMessage></FormHeaderLabel>
        </FormHeader>
        <Form className='Inicio-form-inputs-form' onSubmit={e => e.preventDefault()}>
          <AreaInput className='Inicio-form-inputs-form-area-input'>
            <label htmlFor='email-login'>Email</label>
            <Input id='email-login' type='email' name='email' onChange={e => this.email = e.target.value} placeholder='Coloque seu email' required />  
          </AreaInput>
          <AreaInput className='Inicio-form-inputs-form-area-input'>
            <label htmlFor='password-login'>Senha</label>
            <Input id='password-login' type='password' name='password' onChange={e => this.password = e.target.value } placeholder='Coloque sua senha' minLength='5' maxLength='15'  required />
          </AreaInput>
          <AwesomeButton className='Inicio-form-inputs-form-btn-submit' size='medium' type='primary' ripple action={this.sign}>Entrar</AwesomeButton>
        </Form>
      </div>
    )
  }
}