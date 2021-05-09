class QuestionariosView extends View {

  constructor(elemento) {
    super(elemento)
  }

  template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
              <th>CRIE PERGUNTAS DO QUESTIONÁRIO</th>
              <th>Total de 5 perguntas</th>
            </tr>
            <tr>
              <th>NOME</th>
              <th>QUESTIONÁRIO</th>
            </tr>
        </thead>
      
        <tbody>
          ${model.questionarios.map(n => `
            <tr data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="cursor:pointer">
              <td>${n.nome}</td>
              <td>${n.titulo}</td>
            </tr>
            `).join('')}
        </tbody>
      </table>        
      `  
    
  }

 
}