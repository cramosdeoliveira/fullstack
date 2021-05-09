class ListaPerguntas {

    constructor() {
      this._perguntas = []
    }
  
    adicionaPergunta(perguntas) {
      this._perguntas.push(perguntas)
    }
  
    esvazia() {
      this._perguntas = []
    }
  
    get perguntas() {
      return [].concat(this._perguntas)
    }
  }