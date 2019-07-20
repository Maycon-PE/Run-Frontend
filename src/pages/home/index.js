import React, { Component } from 'react'

import './functions'

//Estilos
import './css/index.css'

// Componentes
import Nav from '../../components/Menu'
import Footer from '../../components/Footer'
import Inicio from '../../components/Home/Inicio'
import Fakes from '../../components/Home/Fakes'
import Parts from '../../components/Home/Parts'
import HowPlay from '../../components/Home/HowPlay'

const inicialStateScreen = {
  inicio: false,
  bots: false,
  parts: false,
  help: false
}


export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { render: inicialStateScreen, ready: false, history: props.history }
  }

  componentDidMount() {
    const render = { ...inicialStateScreen }
    render.inicio = true
    this.setState({ render, ready: true })
  }

  changeBody = body => {
    const render = { ...inicialStateScreen }
    render[body] = true

    this.setState({ render })
  }

  renderBody(render) {
    if (render.inicio) return <Inicio push={this.state.history} />
    if (render.bots) return <Fakes />
    if (render.parts) return <Parts />
    if (render.help) return <HowPlay />
  }

  render() {
    return this.state.ready? (
      <>
        <Nav changeBody={this.changeBody} />
        <div className='Home'>
          {this.renderBody(this.state.render)}
        </div>
        <Footer />
      </>
    ) : (
      <div className='Dashboard-loading'>
        <img className='Dashboard-loading-img' src='./image/loading.gif' alt='Logo de carregamento' />
      </div>
    )
  }
}
