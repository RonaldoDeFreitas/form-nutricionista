//alteracao no titulo
var title = document.querySelector(".title");
title.textContent = "Ronaldo Nutricionista";

//buscando todo conteudo da class paciente
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++){
  
  var paciente = pacientes[i];

  var tdpeso = paciente.querySelector(".info-peso");
  var peso = tdpeso.textContent;

  var tdaltura = paciente.querySelector(".info-altura");
  var altura = tdaltura.textContent;

  var tdimc = paciente.querySelector(".info-imc");

  var pesoValido = true;
  var alturaValido = true;

  if(peso <= 0 || peso >= 500) {
    pesoValido = false;
    tdimc.textContent = "Peso invalida"
    paciente.classList.add("paciente-invalido");
  }

  if(altura <= 0 || altura >= 3.00) {
    alturaValido = false;
    tdimc.textContent = "Altura invalida";
    paciente.style.backgroundColor = "lightcoral";
  }

  if (pesoValido && alturaValido){
    var imc = calculaImc(peso,altura);
    tdimc.textContent = imc;
  }  
}

function calculaImc(peso,altura){
  var imc = 0;

  imc = peso / (altura*altura);

  return imc.toFixed(2);
}



