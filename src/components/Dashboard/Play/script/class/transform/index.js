/* Class carro e piloto */ import { carro, piloto } from '../'
// /* Dados */ import data from '../../../../../data/index.json'

export default function (cls, element) {
  const classCarro = carro()
  const classPiloto = piloto()

  if (cls === 'car') {

    const engine = JSON.parse(element.engine_object)
    const transmission = JSON.parse(element.transmission_object)
    const whells = JSON.parse(element.whells_object)
    const cylinder = JSON.parse(element.cylinder_object)
    const protection = JSON.parse(element.protection_object)

    const obj = new classCarro(element.model, { engine, transmission, whells, cylinder, protection })
    return obj
  } else {
    const obj = new classPiloto(element)
    return obj
  }
}
