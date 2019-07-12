import React, { Component } from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import  { countries } from './data/defaults.json'

export default class Register extends Component {

  constructor(props) {
    super(props)

    this.state = { history: this.props.push, message: '', invalid: this.props.invalid }
  }

  register = () => {

    if (this.email === undefined || this.name === undefined || this.password === undefined || this.nickname === undefined) {
      this.setState({ message: 'Preencha os campos (todos obrigatórios)' })
      return
    }

    if (!/^[a-z0-9.]+@(gmail|hotmail|outlook)+\.[a-z]+(\.[a-z]+)?$/g.test(this.email)) {
      this.state.invalid('email-register')
      const message = 'email: ...' + this.email.slice(this.email.indexOf('@'), this.email.length) + ' é inválido'

      this.setState({ message })
      return
    }  

    if (!Number.isNaN(Number.parseInt(this.nickname))) {
      this.state.invalid('nickname-register')
      this.setState({ message: 'Nickname inválido' })
      return
    }

    if (this.password.length < 5) return

    if (this.password !== this.password2) {
      this.state.invalid('password-2-register')
      this.setState({ message: 'Senhas diferentes' })
      return
    }

    const genre = document.getElementById('genre-register').value
    const country = document.getElementById('country-register').value

    const formData = { 
      name: this.name, email: this.email,
      password: this.password, nickname: this.nickname,
      genre, country, xp: 1, nvl: 1, src: 'default'
    }

    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const res = JSON.parse(xhr.responseText)

        if (!res.status) {
          const key = res.message.slice(res.message.indexOf('key') + 5, res.message.length - 1)
          this.setState({ message: key + ' já existe' })
          this.state.invalid(`${key}-register`)
          return
        } 

        sessionStorage.setItem('token', res.message)
        this.state.history.push('/dashboard')
      }
    }

    xhr.open('post', 'http://localhost:3001/insert/users', true)

    xhr.setRequestHeader('Content-type', 'application/Json')

    xhr.send(JSON.stringify(formData))
  }

  renderOptions = continentes => {
    const paises = []

    countries.forEach(({ name, cn }, indice) => {
      if (cn === continentes) paises.push(<option key={indice} value={name}>{name}</option>)
    })

    return paises
  }

  render() {
    return (
      <div className='App-Inicio-form-inputs-area-form'>
        <div className='App-Inicio-form-inputs-form-header'>
          <label className='App-Inicio-form-inputs-form-header-label'>Cadastro <span className='App-Inicio-form-inputs-form-header-label-span'>{this.state.message}</span></label>
        </div>
        <form className='App-Inicio-form-inputs-form' onSubmit={e => e.preventDefault()}>
          <div className='App-Inicio-form-inputs-form-area-inputs'>
            <div className='App-Inicio-form-inputs-form-area-input'>
              <label htmlFor='nome-register'>Nome</label>
              <input id='nome-register' type='text' name='name' onChange={e => this.name = e.target.value} placeholder='Primeiro e segundo nome' required />  
            </div>
            <div className='App-Inicio-form-inputs-form-area-input'>
              <label htmlFor='nickname-register'>Nickname</label>
              <input id='nickname-register' type='text' name='nickname' onChange={e => this.nickname = e.target.value} placeholder='Seu nome no jogo' required />  
            </div>
          </div>
          <div className='App-Inicio-form-inputs-form-area-input'>
            <label htmlFor='email-register'>Email</label>
            <input id='email-register' type='email' name='email' onChange={e => this.email = e.target.value} placeholder='...@...' required />  
          </div>
          <div className='App-Inicio-form-inputs-form-area-inputs'>
            <div className='App-Inicio-form-inputs-form-area-input'>
              <label htmlFor='password-register'>Senha</label>
              <input id='password-register' type='password' name='password' onChange={e => this.password = e.target.value } placeholder='*********' minLength='5' maxLength='15' required />
            </div>
            <div className='App-Inicio-form-inputs-form-area-input'>
              <label htmlFor='password-2-register'>Confirme a senha</label>
              <input id='password-2-register' type='password' name='password2' onChange={e => this.password2 = e.target.value } placeholder='*********' minLength='5' maxLength='15' required />
            </div>
          </div>
          <div className='App-Inicio-form-inputs-form-area-selects'>
            <div className='App-Inicio-form-inputs-form-area-select'>
              <label htmlFor='genre-register'>Gênero</label>
              <select name='genre' id='genre-register' required>
                <optgroup label='Gêneros'>
                  <option value='M'>Masculino</option>
                  <option value='F'>Feminino</option>
                </optgroup>
              </select>
            </div>
            <div className='App-Inicio-form-inputs-form-area-select'>
              <label htmlFor='country-register'>Pais *Fictício</label>
              <select name='country' id='country-register' required>
                <optgroup label='América'>
                  {this.renderOptions('AM')}
                </optgroup>
                <optgroup label='Europa'>
                  {this.renderOptions('EU')}
                </optgroup>
                <optgroup label='Ásia'>
                  {this.renderOptions('A')}
                </optgroup>
                <optgroup label='Africa'>
                  {this.renderOptions('AF')}
                </optgroup>
              </select>
            </div>
          </div>
          <AwesomeButton className='App-Inicio-form-inputs-form-btn-submit' size='medium' type='secondary' ripple action={this.register}>Registrar</AwesomeButton>
        </form>
      </div>
    )
  }
}