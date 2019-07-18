import React, { Component } from 'react'
import Modal from 'react-awesome-modal'

import { ajaxUpdate, auth, getAllParts, changePart } from './functions'

import './css/index.css'

import Header from '../../components/Dashboard/Header'
import Aprimorator from '../../components/Dashboard/Aprimorator'

// function update(obj = Object, field = String) {
//   return new Promise(resolve => {
//     ajaxUpdate(obj, field)
//     .then(res => {
//       resolve(res)
//       // this.setState({ car: res.data.car, gold: res.data.gold })
//     })
//   })
// }

const initialScreenAprimore = {
  engine: false,
  transmission: false,
  whells: false,
  cylinder: false,
  protection: false
}


export default class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      ready: false, 
      auth: {}, 
      updateState: (obj, field) => ajaxUpdate(obj, field).then(res => this.setState({ auth: res })),
      buyPart: (part, table, field, price) => {
          if (part === this.state.auth.car[field]) return
          changePart(part, table, field, this.state.auth.user.gold, price).then(res => this.setState({ auth: res }))
        },
      attrToSale: () => this.setState({ sale: !this.state.sale }),
      modalAprimore: false,
      aprimore: { ...initialScreenAprimore },
      sale: false }
  }

  componentDidMount() {
    auth()
      .then(res => {
          const aprimore = { ...initialScreenAprimore }
          aprimore.engine = true
          this.setState({ auth: res, ready: true, aprimore })
        })

     getAllParts()   
  }

  openModal = () => this.setState({ modalAprimore : true })

  closeModal = () => this.setState({ modalAprimore : false })

  //Aprimore
  change = (part, selected) => {
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

  render() {
    return this.state.ready? (
      <div className='Dashboard'>
        <Header data={this.state} openModal={this.openModal} />
        <Modal visible={this.state.modalAprimore} width="450" height="500" effect="fadeInUp" onClickAway={this.closeModal}>
          <div className='Dashboard-Aprimorator-content-inside'>
            <Aprimorator data={this.state} change={this.change} closeModal={this.closeModal} />
          </div>
        </Modal> 
      </div>
    ) : (
      <h1>asdadds</h1>
    )
  }
}