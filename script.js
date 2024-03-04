const n01 = document.querySelector("#n01");
const n02 = document.querySelector("#n02");
const botao = document.querySelector("#botao");
let operador01 = document.querySelector("#operador");
let result = document.querySelector("#result");

n01.addEventListener("keyup", calcular);
n02.addEventListener("keyup", calcular);

function calcular() {
  if (n01.value === "" && n02.value === "") {
    window.alert("ERRO, insira um número em ambos os campos.");
    result.innerHTML = "";
    return;
  } else {
    let n1 = parseFloat(n01.value);
    let n2 = parseFloat(n02.value);
    operador = operador01.value;
    if (operador === "+") {
      result.innerHTML = n1 + n2;
    } else if (operador === "/") {
      result.innerHTML = n1 / n2;
    } else if (operador === "*") {
      result.innerHTML = n1 * n2;
    } else if (operador === "-") {
      result.innerHTML = n1 - n2;
    } else {
      result.innerHTML = `<p>Operador inválido.</p>`;
    }
  }
}
