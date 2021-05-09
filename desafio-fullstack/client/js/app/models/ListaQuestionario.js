class ListaQuestionario {

  constructor() {
    this._questionarios = []
  }

  adiciona(questionario) {
    this._questionarios.push(questionario)
  }

  esvazia() {
    this._questionarios = []
  }

  get questionarios() {
    return [].concat(this._questionarios)
  }
}