var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);
  var pacienteTr = montaTr(paciente);
  
  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    var mensagemErro = document.querySelector("#mensagemErro");
    mensagemErro.textContent = erro;
    return;
  }

  // adiciona apciente na tabela//  
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
  
  form.reset();

});

function obtemPacienteDoFormulario(form) {
   
  paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(peso,altura)
  }
  return paciente;
}

function montaTr(paciente){

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado,classe){

  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente (paciente) {
  var erro = [];
  if (!validaPeso(paciente.peso)) erro.push("Peso é inválido");
   
   // os dois if estão certos //
  
  if (!validaAltura(paciente.altura)) {
    erro.push("Altura é inválida");
  }

  return erro;
}