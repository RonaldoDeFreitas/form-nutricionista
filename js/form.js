var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);
  var pacienteTr = montaTr(paciente);

  if (!validaPaciente(paciente)) {
    console.log("Paciente inválido");
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

function validaPaciente (paciente) {
  if (validaPeso(paciente.peso)) {
    return true;
  } else {
    return false;
  }
}

function montaTd(dado,classe){

  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
