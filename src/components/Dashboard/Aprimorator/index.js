import React from 'react'

import './css/index.css'

import Engine from './Parts/Engine'
import Transmission from './Parts/Transmission'
import Whells from './Parts/Whells'
import Cylinder from './Parts/Cylinder'
import Protection from './Parts/Protection'

function renderContent(data) {

  if (data.aprimore.engine) return <Engine buyPart={data.buyPart} update={data.updateState} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.engine} data={JSON.parse(data.auth.car.engine_object)} />

  if (data.aprimore.transmission) return <Transmission buyPart={data.buyPart} update={data.updateState} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.transmission} data={JSON.parse(data.auth.car.transmission_object)} />

  if (data.aprimore.whells) return <Whells buyPart={data.buyPart} update={data.updateState} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.whells} data={JSON.parse(data.auth.car.whells_object)} />

  if (data.aprimore.cylinder) return <Cylinder buyPart={data.buyPart} update={data.updateState} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.cylinder} data={JSON.parse(data.auth.car.cylinder_object)} />

  if (data.aprimore.protection) return <Protection buyPart={data.buyPart} update={data.updateState} sale={data.sale} gold={data.auth.user.gold} name={data.auth.car.protection} data={JSON.parse(data.auth.car.protection_object)} />
}


export default ({ data, closeModal, change }) =>
  <div className='Dashboard-Aprimorator'>
    <div className='Dashboard-Aprimorator-parts'>
      <ul className='Dashboard-Aprimorator-parts-ul'>
        <li onClick={() => change('engine', 0)}><img src='http://localhost:3001/files/icons/aprimore/parts/motor.png' alt='Motor icon' /> +{JSON.parse(data.auth.car.engine_object).ups}</li>
        <li onClick={() => change('transmission', 1)}><img src='http://localhost:3001/files/icons/aprimore/parts/cambio.png' alt='Câmbio icon' /> +{JSON.parse(data.auth.car.transmission_object).ups}</li>
        <li onClick={() => change('whells', 2)}><img src='http://localhost:3001/files/icons/aprimore/parts/rodas.png' alt='Rodas icon' /> +{JSON.parse(data.auth.car.whells_object).ups}</li>
        <li onClick={() => change('cylinder', 3)}><img src='http://localhost:3001/files/icons/aprimore/parts/cilindro.png' alt='Cilindro icon' /> +{JSON.parse(data.auth.car.cylinder_object).ups}</li>
        <li onClick={() => change('protection', 4)}><img src='http://localhost:3001/files/icons/aprimore/parts/protecao.png' alt='Proteção icon' /> +{JSON.parse(data.auth.car.protection_object).ups}</li>
      </ul>
    </div>
    <div className='Dashboard-Aprimorator-content'>
      {renderContent(data)}
    </div>
    <div className='Dashboard-Aprimorator-buttonsBase'>
      <button className='Dashboard-Aprimorator-buttonsBase-btnLoja' onClick={data.attrToSale}><i className="fa fa-cart-arrow-down"></i></button>
      <button className='Dashboard-Aprimorator-buttonsBase-btnExit' onClick={closeModal}><i className="fa fa-times-circle"></i></button>
    </div>
  </div>

// export default class Aprimore extends Component {
//   constructor(props) {
//     super(props)

//     console.log(props.car)

//     this.state = { sale: false, gold: props.gold, car: props.car, closeModal: props.closeModal, aprimore: { ...initialState} }
//   }

//   componentDidMount = e => {
//     const aprimore = this.state.aprimore
//     aprimore.engine = true

//     this.setState({ aprimore })
//   }

//   update = (obj = Object, field = String) => {
//     ajaxUpdate(obj, field)
//       .then(res => {
//         this.setState({ car: res.data.car, gold: res.data.gold })
//       })
//   }

  // change = (part, selected) => {
  //   document.querySelector('.Dashboard-Aprimorator-parts-ul').childNodes.forEach((li, indice) => {
  //     if (selected === indice) {
  //       li.style.borderBottom = '1.5px solid #fff'
  //       li.style.borderTop = '1.5px solid #fff'
  //     } else {
  //       li.style.border = '1px solid transparent'
  //     }

  //   })

  //   const aprimore = { ...initialState }

  //   aprimore[part] = true

  //   this.setState({ aprimore })
  // }

//   renderContent = () => {
//     const aprimore = this.state.aprimore

//     if (aprimore.engine) return <Engine sale={this.state.sale} gold={this.state.gold} name={this.state.car.engine} data={JSON.parse(this.state.car.engine_object)} update={this.update} />

//     if (aprimore.transmission) return <Transmission sale={this.state.sale} gold={this.state.gold} name={this.state.car.transmission} data={JSON.parse(this.state.car.transmission_object)} update={this.update} />

//     if (aprimore.whells) return <Whells sale={this.state.sale} gold={this.state.gold} name={this.state.car.whells} data={JSON.parse(this.state.car.whells_object)} update={this.update} />

//     if (aprimore.cylinder) return <Cylinder sale={this.state.sale} gold={this.state.gold} name={this.state.car.cylinder} data={JSON.parse(this.state.car.cylinder_object)} update={this.update} />

//     if (aprimore.protection) return <Protection sale={this.state.sale} gold={this.state.gold} name={this.state.car.protection} data={JSON.parse(this.state.car.protection_object)} update={this.update} />
//   }

//   toggleSale = () => this.setState({ sale: !this.state.sale })

//   render() {
//     return (
//       <div className='Dashboard-Aprimorator'>
//         <div className='Dashboard-Aprimorator-parts'>
//           <ul className='Dashboard-Aprimorator-parts-ul'>
//             <li onClick={() => this.change('engine', 0)}><img src='http://localhost:3001/files/icons/aprimore/parts/motor.png' alt='Motor icon' /> +{JSON.parse(this.state.car.engine_object).ups}</li>
//             <li onClick={() => this.change('transmission', 1)}><img src='http://localhost:3001/files/icons/aprimore/parts/cambio.png' alt='Câmbio icon' /> +{JSON.parse(this.state.car.transmission_object).ups}</li>
//             <li onClick={() => this.change('whells', 2)}><img src='http://localhost:3001/files/icons/aprimore/parts/rodas.png' alt='Rodas icon' /> +{JSON.parse(this.state.car.whells_object).ups}</li>
//             <li onClick={() => this.change('cylinder', 3)}><img src='http://localhost:3001/files/icons/aprimore/parts/cilindro.png' alt='Cilindro icon' /> +{JSON.parse(this.state.car.cylinder_object).ups}</li>
//             <li onClick={() => this.change('protection', 4)}><img src='http://localhost:3001/files/icons/aprimore/parts/protecao.png' alt='Proteção icon' /> +{JSON.parse(this.state.car.protection_object).ups}</li>
//           </ul>
//         </div>
//         <div className='Dashboard-Aprimorator-content'>
//           {this.renderContent()}
//         </div>
//         <div className='Dashboard-Aprimorator-buttonsBase'>
//           <button className='Dashboard-Aprimorator-buttonsBase-btnLoja' onClick={this.toggleSale}><i class="fa fa-cart-arrow-down"></i></button>
//           <button className='Dashboard-Aprimorator-buttonsBase-btnExit' onClick={this.state.closeModal}><i className="fa fa-times-circle"></i></button>
//         </div>
//       </div>
//     )
//   }
// }