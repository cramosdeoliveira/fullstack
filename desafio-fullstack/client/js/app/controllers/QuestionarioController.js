class QuestionarioController {

  constructor() {
    let $ = document.querySelector.bind(document)

    this._inputNome = $('#nome')
    this._inputTitulo = $('#titulo')

    let self = this
    
    this._listaQuestionario = new Proxy(new ListaQuestionario(), {
      get(target, prop, receiver) {
        if (['adiciona', 'esvazia'].includes(prop) && typeof (target[prop] == typeof (Function))) {
          return function() { 
            Reflect.apply(target[prop], target, arguments)
            self._questionarioView.update(target)
          }        
        }
        return Reflect.get(target, prop, receiver)
      }
    })
   
    
    this._listaPerguntas = new Proxy(new ListaPerguntas(), {
      get(target, prop, receiver) {
        if (['adicionaPergunta', 'esvazia'].includes(prop) && typeof (target[prop] == typeof (Function))) {
          return function() { 
            Reflect.apply(target[prop], target, arguments)
            self._perguntasView.update(target)
          }        
        }
        return Reflect.get(target, prop, receiver)
      }
    })

    this._questionarioView = new QuestionariosView($('#questionarioView'))
    this._questionarioView.update(this._listaQuestionario)
    this._perguntasView = new PerguntasView(document.querySelector('#perguntasView'))
    this._perguntasView.update(this._listaPerguntas)
    

    this._mensagem = new Mensagem()
    this._mensagemView = new MensagemView($('#mensagemView'))
    this._mensagemView.update(this._mensagem)
  }

  adiciona(event) {
    event.preventDefault()

    this._listaQuestionario.adiciona(this._criaQuestionario())
    console.log(this._listaQuestionario);
    this._mensagem.texto = 'Questionário adicionado com sucesso!'
    this._mensagemView.update(this._mensagem)
    this.limpaQuestionario()
    
  }

  _criaQuestionario() {    
    return new Questionario(
      this._inputNome.value, this._inputTitulo.value
      )
  }

  limpaQuestionario() {
    this._inputNome.value = ''
    this._inputTitulo.value = ''

    this._inputNome.focus()
  }

  adicionaPergunta(event) {
    event.preventDefault()        

    let valoresInputPerguntas = [
      this._inputPergunta1 = document.querySelector('#pergunta1'),
      this._inputPergunta2 = document.querySelector('#pergunta2'),
      this._inputPergunta3 = document.querySelector('#pergunta3'),
      this._inputPergunta4 = document.querySelector('#pergunta4'),
      this._inputPergunta5 = document.querySelector('#pergunta5')
    ]
    
    this._listaPerguntas.adicionaPergunta(this._criaPerguntas())
    this._mensagem.texto = 'Perguntas adicionadas com sucesso!'
    this._mensagemView.update(this._mensagem)

    console.log(valoresInputPerguntas[0].value)
    console.log(valoresInputPerguntas[1].value)
    console.log(valoresInputPerguntas[2].value)
    console.log(valoresInputPerguntas[3].value)
    console.log(valoresInputPerguntas[4].value)

    this.limpaPerguntas()
    
  }

  _criaPerguntas() {    
    return new Perguntas(
      this._inputPergunta1.value,
      this._inputPergunta2.value,
      this._inputPergunta3.value,
      this._inputPergunta4.value,
      this._inputPergunta5.value
      )
  }

  limpaPerguntas() {
    this._inputPergunta1.value = ''
    this._inputPergunta2.value = ''
    this._inputPergunta3.value = ''
    this._inputPergunta4.value = ''
    this._inputPergunta5.value = ''

    this._inputPergunta1.focus()
  }

  adicionaRespostas(event)  {
    event.preventDefault()
    
    let valoresInputRespostas = [
      this._inputResposta1 = document.querySelector('#resposta1'),
      this._inputResposta2 = document.querySelector('#resposta2'),
      this._inputResposta3 = document.querySelector('#resposta3'),
      this._inputResposta4 = document.querySelector('#resposta4'),
      this._inputResposta5 = document.querySelector('#resposta5')
    ]

    console.log(valoresInputRespostas[0].value)
    console.log(valoresInputRespostas[1].value)
    console.log(valoresInputRespostas[2].value)
    console.log(valoresInputRespostas[3].value)
    console.log(valoresInputRespostas[4].value)
  }

 
}