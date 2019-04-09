class SerVivo(type) {
  constructor(type) {
    this.type = type
  }

  getType() {
    return this.type
  }

  obtenerEnergia(){
    // Aquí masticamos
  }
}

const perro = new SerVivo('canino')

perro.getType()
