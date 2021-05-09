class TituloModalView extends View {

  constructor(elemento) {
    super(elemento)
  }

  template(model) {
    return `<h5 class="modal-title" id="staticBackdropLabel">${model.titulo}</h5>`
  }
}