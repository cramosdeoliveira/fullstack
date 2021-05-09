class PerguntasView extends View {

  constructor(elemento) {
    super(elemento)
  }

  template(model) {
    return `      
      <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>RESPONDA AO QUESTIONÁRIO</th>
        </tr>
        <tr>
          <th>QUESTIONÁRIO</th>          
        </tr>
      </thead>
    
      <tbody>      
        ${model.perguntas.map(n => `          
          <tr data-bs-toggle="modal" data-bs-target="#exampleModal" style="cursor:pointer">
            <td>${n.titulo}</td>             
          </tr>
          `).join('')}
      </tbody>
    </table>
          
      `
             
    
  }

 
}