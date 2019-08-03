//======CLASS CARRO======\\
export const carro = () => {
  class Carro {
    constructor(modeloParam = String, { engine, transmission, whells, cylinder, protection } = Object) {
      //======Atributos principais======\\
      this.modelo = modeloParam
      this.velocidade = engine.speed + transmission.speed + whells.speed + cylinder.speed
      this.delta = engine.acceleration + transmission.acceleration + whells.acceleration + cylinder.acceleration
      this.porcentoMarchas = 100 / engine.exchange
      this.totMarchas = engine.exchange
      this.taxaFreio = whells.brake
      this.cambio = engine['exchange_rates']
      this.qualidade = engine.resistance + transmission.resistance + cylinder.resistance + protection.resistance
      this.nitro = cylinder.turbo + engine.turbo
      //======Atributos extras======\\
      this.resistencia = 0
      this.freio = whells.brake * engine.exchange
      this.marcha = 1
      this.arranque = engine['exchange_rates']['1']
      this.velocidadeAtual = 0
      this.tanque = 0
      this.btnNitro = false
      this.cilindro = true
      this.preTurbo = 0
      this.aproveitamento = 0
      this.distanciaPecorrida = 0.000
      this.categoria = this.velocidade + this.delta + this.qualidade + this.nitro
    }

    //======Métodos======\\
    acelerar(turbo = this.getArranque() * this.getDelta() / 4) {

      if (this.getMarcha() < this.getTotMarchas()) {
        if (this.getVelocidadeAtual() < this.getVelocidade() * (this.getPorcentoMarchas() * this.getMarcha()) / 100) {
          this.setArranque(this.getCambio()[this.getMarcha()])
        } else {
          this.setMarcha(this.getMarcha() + 1)
          this.setFreio(this.getFreio() - this.getTaxaFreio())
        }
      }

      if (this.getVelocidadeAtual() + (0.02 * this.getDelta() / 4) <= this.getVelocidade()) {
        this.setVelocidadeAtual(this.getVelocidadeAtual() + turbo)
      } else {
        this.setVelocidadeAtual(this.getVelocidade())
        this.setResistencia(this.getResistencia() + 0.0166666666 * 3600 / 600)
        if (this.getResistencia() >= this.getQualidade()) {
          this.setResistencia(0)
          this.quebra()
        }
      }
      this.setAproveitamento(600 - 600 * this.getVelocidadeAtual() / this.getVelocidade())
      this.setDistanciaPecorrida(this.getDistanciaPecorrida() + (this.getVelocidadeAtual() / 59 / 3481))
    }

    quebra() {
      this.setVelocidadeAtual(this.getVelocidade() * 60 / 100)
      this.setMarcha(Math.floor(this.getTotMarchas() - (this.getTotMarchas() / 4)))
      this.setFreio(7 * this.getMarcha() / (this.getTotMarchas() - this.getMarcha()))
    }

    frear() {
      if (this.getVelocidadeAtual() - this.getFreio() >= 0) {
        this.setVelocidadeAtual(this.getVelocidadeAtual() - this.getFreio())
        if (this.getVelocidadeAtual() < this.getVelocidade() * (this.getPorcentoMarchas() * (this.getMarcha() - 1)) / 100) {
          this.setMarcha(this.getMarcha() - 1)
          this.setFreio(this.getFreio() + this.getTaxaFreio())
        }
      }
    }

    turbo() {
      if (this.getTanque() <= this.getNitro()) {
        this.setTanque(this.getTanque() + 0.0166666666)
      }
      if (this.getVelocidadeAtual() < this.getVelocidade()) {
        if (this.getBtnNitro() === false && this.getCilindro() === true) {
          if (this.getTanque() >= this.getNitro()) {
            this.setBtnNitro(true)
            this.setPreTurbo(this.getVelocidadeAtual())
          }
        } else if (this.getBtnNitro() === true && this.getTanque() <= this.getNitro() / 5 + this.getNitro() && this.getCilindro() === true) {
          this.setTanque(this.getTanque() + 0.0166666666)
          this.acelerar((this.getPreTurbo() / this.getMarcha()) / this.getVelocidade())
        } else {
          this.setCilindro(false)
          this.getTanque(this.getNitro())
          this.setBtnNitro(false)
        }
      }
    }

    //======Gets======\\
    getVelocidadeAtual() {
      return this.velocidadeAtual
    }
    getDistanciaPecorrida() {
      return this.distanciaPecorrida
    }
    getModelo() {
      return this.modelo
    }
    getVelocidade() {
      return this.velocidade
    }
    getDelta() {
      return this.delta
    }
    getPorcentoMarchas() {
      return this.porcentoMarchas
    }
    getTotMarchas() {
      return this.totMarchas
    }
    getCambio() {
      return this.cambio
    }
    getQualidade() {
      return this.qualidade / 2
    }
    getTaxaFreio() {
      return this.taxaFreio
    }
    getNitro() {
      return this.nitro
    }
    getTanque() {
      return this.tanque
    }
    getBtnNitro() {
      return this.btnNitro
    }
    getCilindro() {
      return this.cilindro
    }
    getPreTurbo() {
      return this.preTurbo
    }
    getResistencia() {
      return this.resistencia
    }
    getFreio() {
      return this.freio
    }
    getMarcha() {
      return this.marcha
    }
    getArranque() {
      return this.arranque
    }
    getAproveitamento() {
      return this.aproveitamento
    }
    getCategoria() {
      return this.categoria
    }
    getCategoriaFormatada() {
      if (this.categoria < 400) {
        return 'C'
      } else if (this.categoria < 500) {
        return 'R'
      } else if (this.categoria < 650) {
        return 'S'
      } else if (this.categoria < 800) {
        return 'SS'
      } else {
        return 'A'
      }
    }

    //======Sets======\\
    setVelocidadeAtual(va) {
      this.velocidadeAtual = va
    }
    setDistanciaPecorrida(d) {
      this.distanciaPecorrida = d
    }
    setModelo(m) {
      this.modelo = m
    }
    setVelocidade(v) {
      this.velocidade = v
    }
    setDelta(d) {
      this.delta = d
    }
    setQualidade(q) {
      this.qualidade = q
    }
    setNitro(n) {
      this.nitro = n
    }
    setTanque(t) {
      this.tanque = t
    }
    setBtnNitro(n) {
      this.btnNitro = n
    }
    setCilindro(c) {
      this.cilindro = c
    }
    setPreTurbo(p) {
      this.preTurbo = p
    }
    setResistencia(r) {
      this.resistencia = r
    }
    setFreio(f) {
      this.freio = f
    }
    setMarcha(m) {
      this.marcha = m
    }
    setArranque(ar) {
      this.arranque = ar
    }
    setAproveitamento(a) {
      this.aproveitamento = a
    }

  }

  return Carro
}
//======FIM CLASS CARRO======\\

//======CLASS PILOTO======\\
export const piloto = () => {
  class Piloto {
    constructor({ nickname = String, nvl = Number, genre = String, country = String }) {
      //======Atributos======\\
      this.nickname = nickname
      this.nvl = nvl
      this.genre = genre
      this.country = country
    }
    //======Gets======\\
    getNome() {
      return this.nickname
    }
    getSexo() {
      return this.genre
    }
    getNacionalidade() {
      return this.country
    }
    getHabilidade() {
      return this.nvl
    }
  }
  return Piloto
}
//======FIM CLASS PILOTO======\\
