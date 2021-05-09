var campos = [
  document.querySelector('#nome'),
  document.querySelector('#titulo')
]

var tbody = document.querySelector('table tbody')

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault()
  var tr = document.querySelector('tr')
  
  campos.forEach( campo => {
    var td = document.querySelector('td')
    td.textContent = campo.value
    tr.appendChild(td)
  })

  campos[0].value = ''
  campos[1].value = ''
  campos[0].focus()
})

var perguntas = [
  document.querySelector('#pergunta1'),
  document.querySelector('#pergunta2'),
  document.querySelector('#pergunta3'),
  document.querySelector('#pergunta4'),
  document.querySelector('#pergunta5')
]

document.querySelector('.perguntas').addEventListener('submit', event => {
  event.preventDefault()
  
  var tr = document.querySelector('tr')
  perguntas.forEach(pergunta => {
    var td = document.querySelector('td')
    td.textContent = pergunta.value
    tr.appendChild(td)
  })
})


perguntas[0].value = ''
perguntas[1].value = ''
perguntas[2].value = ''
perguntas[3].value = ''
perguntas[4].value = ''
perguntas[0].focus()



