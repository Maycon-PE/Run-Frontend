function getForca(car, config) {
  
  const engine = JSON.parse(car.engine_object)
  const transmition = JSON.parse(car.transmission_object)
  const whells = JSON.parse(car.whells_object)
  const cylinder = JSON.parse(car.cylinder_object)
  const protection = JSON.parse(car.protection_object)

  const attributeSpeed = engine.speed + transmition.speed + whells.speed + cylinder.speed
  const attributeAcceleration = engine.acceleration + transmition.acceleration + whells.acceleration + cylinder.acceleration
  const attributeTurbo = cylinder.turbo + engine.turbo
  const attributeResistance = protection.resistance + engine.resistance + transmition.resistance + cylinder.resistance

  const power = attributeSpeed  + attributeAcceleration + attributeResistance + attributeTurbo

  if (config.res === 'numero') return power

  if (config.res === 'formatado') {

    const corCategorias = {
      c: 'linear-gradient(100deg, rgb(2, 253, 0), rgb(0, 0, 0), rgb(2, 253, 0))',
      // verde
      r: 'linear-gradient(100deg, rgb(0, 255, 184), rgb(0, 0, 0), rgb(0, 255, 198))',
      // ciano
      s: 'linear-gradient(100deg, rgb(41, 0, 255), rgb(0, 0, 0), rgb(41, 0, 255))',
      // azul
      ss: 'linear-gradient(100deg, rgb(230, 0, 255), rgb(0, 0, 0), rgb(230, 0, 255))',
      // roxo
      a: 'linear-gradient(100deg, rgb(255, 0, 0), rgb(0, 0, 0), rgb(255, 0, 0))'
      // vermelho
    }

    function retorneLetra() {
      if (power < 400) {
        return 'C'
      } else if (power < 500) {
        return 'R'
      } else if (power < 650) {
        return 'S'
      } else if (power < 800) {
        return 'SS'
      } else {
        return 'A'
      }
    }
    setTimeout(() => document.getElementById(`categoria${config.index}`).style.background = corCategorias[retorneLetra().toLowerCase(power)], 1000)
    return `[${retorneLetra(power)}]`
  }

  if (config.res === 'attr') {
    const info = [attributeSpeed, attributeAcceleration, attributeResistance, attributeTurbo]

    return info[config.value]
  }
}

export { getForca } 
