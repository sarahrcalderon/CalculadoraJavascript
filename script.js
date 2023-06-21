let valorInput = document.getElementById("resultado");

function clearResult() {
  valorInput.value = "";
}

function valorAnexado(value) {
  valorInput.value += value;
}

function calculandoResultado() {
  try {
    let result = eval(valorInput.value);
    valorInput.value = result;
  } catch (error) {
    valorInput.value = "Erro";
  }
}
