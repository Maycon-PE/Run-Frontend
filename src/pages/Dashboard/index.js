import React, { Component } from 'react'
import Modal from 'react-awesome-modal'

import { updateMyCar, auth, changePart, changePhoto } from './functions'

import './css/index.css'

import Header from '../../components/Dashboard/Header'
import Footer from '../../components/Footer'
import Aprimorator from '../../components/Dashboard/Aprimorator'
import Play from '../../components/Dashboard/Play'
import Profile from '../../components/Dashboard/Profile'


const initialScreenAprimore = {
  engine: false,
  transmission: false,
  whells: false,
  cylinder: false,
  protection: false
}

const initialBody = {
  play: false,
  profile: false
}

export default class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      ready: false, 
      auth: {}, 
      updatePart: (obj, field) => updateMyCar(obj, field).then(auth => this.setState({ auth })),
      updateProfile: file => changePhoto(file).then(auth => this.setState({ auth })),
      buyPart: (part, table, field, price) => {
          if (part === this.state.auth.car[field]) return
          changePart(part, table, field, this.state.auth.user.gold, price).then(auth => this.setState({ auth }))
        },
      changeBody: content => {
        const body = { ...initialBody }
        body[content] = true
        this.setState({ body })
      }, 
      attrToSale: () => this.setState({ sale: !this.state.sale }),
      modalAprimore: false,
      aprimore: { ...initialScreenAprimore },
      body:  { ...initialBody },
      sale: false }
  }

  componentDidMount() {
    auth()
      .then(res => {
          const aprimore = { ...initialScreenAprimore }
          aprimore.engine = true
          const body = { ...initialBody }
          body.play = true
          this.setState({ auth: res, ready: true, aprimore, body })
          // setTimeout(() => this.setState({ auth: res, ready: true, aprimore, body }), 2000)
        }) 
  }

  openModal = () => this.setState({ modalAprimore : true })

  closeModal = () => this.setState({ modalAprimore : false })

  //Aprimore
  changeAprimore = (part, selected) => {
    document.querySelector('.Dashboard-Aprimorator-parts-ul').childNodes.forEach((li, indice) => {
      if (selected === indice) {
        li.style.borderBottom = '1.5px solid #fff'
        li.style.borderTop = '1.5px solid #fff'
      } else {
        li.style.border = '1px solid transparent'
      }

    })

    const aprimore = { ...initialScreenAprimore }

    aprimore[part] = true

    this.setState({ aprimore })
  }

  renderBody(state) {
    if (state.body.play) return <Play data={state.auth} />
    if (state.body.profile) return <Profile data={state.auth} updatePhoto={this.state.updateProfile} />
  }

  render() {
    return this.state.ready? (
      <div className='Dashboard'>
        <Header data={this.state} openModal={this.openModal} />
        <Modal visible={this.state.modalAprimore} width="450" height="500" effect="fadeInUp" onClickAway={this.closeModal}>
          <div className='Dashboard-Aprimorator-content-inside'>
            <Aprimorator data={this.state} change={this.changeAprimore} closeModal={this.closeModal} />
          </div>
        </Modal>
        <div className='Dashboard-content'>
          {this.renderBody(this.state)}
        </div>
        <Footer />
      </div>
    ) : (
      <div className='Dashboard-loading'>
        <img className='Dashboard-loading-img' src='./image/loading.gif' alt='Logo de carregamento' />
      </div>
    )
  }
}