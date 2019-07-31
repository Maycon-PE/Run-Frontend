import React, { Component } from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

import { login } from '../../functions'

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = { history: props.push, message: '', invalid: props.invalid }
  }

  sign = () => {
    if (this.email === undefined || this.password === undefined) {
      this.setState({ message: 'Preencha os campos' })
      return
    }

    if (!/^[a-z0-9.]+@(gmail|hotmail|outlook)+\.[a-z]+(\.[a-z]+)?$/g.test(this.email)) {
      this.state.invalid('email-login')
      this.setState({ message: 'Email inválido!' })
      return
    }

    if (this.password.length < 5) {
      this.state.invalid('password-login')
      this.setState({ message: 'Senha inválida' })
      return
    }

    const formData = { email: this.email, password: this.password }

    login(formData)
      .then(res => {
        if (!res.status) {
          if (res.message.indexOf('Senha') !== -1) {
            this.state.invalid('password-login')
          } else {
            this.state.invalid('email-login')
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
        <div className='Inicio-form-inputs-form-header'>
          <label className='Inicio-form-inputs-form-header-label'>Login <span className='Inicio-form-inputs-form-header-label-span'>{this.state.message}</span></label>
        </div>
        <form className='Inicio-form-inputs-form' onSubmit={e => e.preventDefault()}>
          <div className='Inicio-form-inputs-form-area-input'>
            <label htmlFor='email-login'>Email</label>
            <input id='email-login' type='email' name='email' onChange={e => this.email = e.target.value} placeholder='Coloque seu email' required />  
          </div>
          <div className='Inicio-form-inputs-form-area-input'>
            <label htmlFor='password-login'>Senha</label>
            <input id='password-login' type='password' name='password' onChange={e => this.password = e.target.value } placeholder='Coloque sua senha' minLength='5' maxLength='15'  required />
          </div>
          <AwesomeButton className='Inicio-form-inputs-form-btn-submit' size='medium' type='primary' ripple action={this.sign}>Entrar</AwesomeButton>
        </form>
      </div>
    )
  }
}