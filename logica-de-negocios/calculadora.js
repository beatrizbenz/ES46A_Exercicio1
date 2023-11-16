// logica-de-negocios/calculadora.js
document.addEventListener("DOMContentLoaded", () => {
  const nome = document.querySelector("#nome");
  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");
  const n3 = document.getElementById("n3");
  const med = document.getElementById("me");
  const btnCalcular = document.getElementById("b1");
  const r = document.getElementById("resp");
  const btnLimpar = document.getElementById("b2");

  // Evento para limpar os campos
  btnLimpar.addEventListener("click", limpar);

  function limpar() {
    nome.value = "";
    n1.value = "";
    n2.value = "";
    n3.value = "";
    med.value = "";
    r.innerHTML = "Campos limpos com sucesso!";
  }

  // Evento do botao para calcular os campos
  btnCalcular.addEventListener("click", () => {
    let n = nome.value;
    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    let num3 = Number(n3.value);
    let m = Number(med.value);
    let mf = (num1 + num2 * 2 + num3 * 3 + m) / 7;

    r.innerHTML = `${n}, suas notas são: <br>
        Nota 1: ${num1} <br>
        Nota 2: ${num2} <br>
        Nota 3: ${num3}<br>
        Média de Exercícios: ${m}<br>
        Média final: ${mf.toFixed(2)}`;

    // Comunicando com a camada de persistencia para armazenar histórico
    addToHistory(`${n}: Média final - ${mf.toFixed(2)}`);
  });

  function addToHistory(item) {
    // Salvando o historico no armazenamento local
    const calculatorHistory =
      JSON.parse(localStorage.getItem("calculatorHistory")) || [];
    calculatorHistory.push(item);
    localStorage.setItem(
      "calculatorHistory",
      JSON.stringify(calculatorHistory)
    );
  }
});
