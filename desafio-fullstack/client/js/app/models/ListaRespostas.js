class ListaRespostas {

  constructor() {
    this.respostas = []
  }

  adicionaPergunta(perguntas) {
    this.respostas.push(perguntas)
  }

  esvazia() {
    this.respostas = []
  }

  get perguntas() {
    return [].concat(this.respostas)
  }
}