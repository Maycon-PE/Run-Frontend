import React, { Component } from 'react'
import Modal from 'react-awesome-modal'

import { updateMyCar, auth, changePart, changePhoto, adv, partSelected, withdrawal, winOrLose } from './functions'

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
      sale: false, 
      auth: {},
      adv: {},
      play: {
        played: false,
        startStop: situation => {
          if (situation) {
            setTimeout(() => {
              document.querySelector('.Dashboard-content-Play-game-area-btns').style.pointerEvents = 'painted'
            }, 5000)
          } else {
            const gold = this.state.auth.user.gold - ((this.state.adv.bot.nvl * 200) - this.state.auth.user.nvl * 100)
            withdrawal({ auth: this.state.auth, gold: gold < 0? 0: gold })
              .then(auth => this.setState({ auth }))
          }
          const play = { ...this.state.play }
          play.played = situation
          this.setState({ play })
        },
        changeAdv: async () => {
          let advObject = {}
          do {
            advObject = await adv()
          } while (advObject.bot.nickname === this.state.adv.bot.nickname)
          this.setState({ adv: advObject })
        },
        win: (winner = Boolean) => {
          const gold = winner? this.state.auth.user.gold + ((this.state.adv.bot.nvl * 1000) - this.state.auth.user.nvl * 500) : this.state.auth.user.gold + ((this.state.adv.bot.nvl * 300) - this.state.auth.user.nvl * 200)
          const xp = winner? this.state.auth.user.xp + ((this.state.adv.bot.nvl * 10) - this.state.auth.user.nvl * 5) : this.state.auth.user.xp + ((this.state.adv.bot.nvl * 4) - this.state.auth.user.nvl * 2)

          winOrLose({ auth: this.state.auth }, { gold: gold < 99999999? gold: 99999999, xp })
            .then(auth => this.setState({ auth }))
        }
      },
      profile: {
        updateProfile: file => changePhoto({ auth: this.state.auth, file }).then(auth => this.setState({ auth }))
      },
      insideAprimore: {
        modalAprimore: false,
        messageUpdate: 'Pronto?',
        updatePart: (obj, field) => updateMyCar({ auth: this.state.auth }, obj, field).then(auth => {
          document.querySelector('.Dashboard-Aprimorator-content-inside-body-btn').style.pointerEvents = 'none'
          const insideAprimore = { ...this.state.insideAprimore }
          insideAprimore.messageUpdate = 'Sucesso'
          this.setState({ auth, insideAprimore })
          setTimeout(() => {
            document.querySelector('.Dashboard-Aprimorator-content-inside-body-btn').style.pointerEvents = 'painted'
            const insideAprimore = { ...this.state.insideAprimore }
            insideAprimore.messageUpdate = 'Pronto?'
            this.setState({ insideAprimore }) 
          }, 1300)
        }),
        buyPart: (part, table, field, price) => {
          if (part === this.state.auth.car[field]) return
          changePart({ auth: this.state.auth }, part, table, field, this.state.auth.user.gold, price).then(auth => this.setState({ auth }))
        },
        attrToSale: () => this.setState({ sale: !this.state.sale }),
        changeAprimore: (part, selected) => {
          partSelected(selected)
          const aprimore = { ...initialScreenAprimore }
          aprimore[part] = true
          this.setState({ aprimore })
        }
      },
      changeBody: content => {
        const body = { ...initialBody }
        body[content] = true
        this.setState({ body })
      }, 
      aprimore: { ...initialScreenAprimore },
      body:  { ...initialBody } 
    }
  }

  componentDidMount() {
    auth()
      .then(res => {
          const aprimore = { ...initialScreenAprimore }
          aprimore.engine = true
          const body = { ...initialBody }
          body.play = true
          adv(res.user.nvl)
            .then(bot => {
              console.log({ voce: res, oponente: bot })
              this.setState({ auth: res, ready: true, aprimore, body, adv: bot })
            })
        }) 
  }

  openModal = () => {
    const insideAprimore = { ...this.state.insideAprimore }
    insideAprimore.modalAprimore = true
    this.setState({ insideAprimore })
  }

  closeModal = () => {
    const insideAprimore = { ...this.state.insideAprimore }
    insideAprimore.modalAprimore = false
    this.setState({ insideAprimore })
  }

  renderBody(state) {
    if (state.body.play) return <Play play={state.play} data={state.auth} adv={state.adv} change={this.state.play.changeAdv} />
    if (state.body.profile) return <Profile data={state.auth} updatePhoto={this.state.profile.updateProfile} />
  }

  render() {
    return this.state.ready? (
      <div className='Dashboard'>
        <Header data={this.state} openModal={this.openModal} />
        <Modal visible={this.state.insideAprimore.modalAprimore} width="450" height="500" effect="fadeInUp" onClickAway={this.closeModal}>
          <div className='Dashboard-Aprimorator-content-inside'>
            <Aprimorator data={this.state} change={this.state.insideAprimore.changeAprimore} closeModal={this.closeModal} />
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