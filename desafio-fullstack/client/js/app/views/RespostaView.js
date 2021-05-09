class RespostasView extends View {

  constructor(elemento) {
    super(elemento)
  }

  template(model) {
    return `      
    <table class="table table-hover table-bordered">
    <thead>
      <tr>
        <th>RESPOSTAS DO QUESTIONÁRIO</th>
      </tr>
      <tr>
        <th>QUESTIONÁRIO</th>      
      </tr>
    </thead>
  
    <tbody>      
      ${model.respostas.map(n => `              
        <tr data-bs-toggle="modal" data-bs-target="#exampleModal" style="cursor:pointer" onclick="document.querySelector('#staticBackdropLabel').textContent = '${n.titulo}'">
          <td>${n.titulo}</td>       
        </tr>
        `).join('')}
    </tbody>
  </table>
        
      `
             
    
  }

 
}