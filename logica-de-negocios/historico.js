// Logica-de-Negocios/historico.js

document.addEventListener("DOMContentLoaded", () => {
  // Inicializando
  displayHistory();

  // Adiciona um evento ao botão para limpar o histórico
  document
    .getElementById("limparHistorico")
    .addEventListener("click", limparHistorico);
});

function displayHistory() {
  // Mostrar o historico
  const historyList = document.getElementById("historyList");

  // Limpa a exibição do histórico na página antes de renderizar
  historyList.innerHTML = "";

  // Comunicando com a camada de persistencia para recuperar o histórico
  const history = getHistory();

  // Renderizando o histórico na página
  history.forEach((item) => {
    addToHistory(item);
  });
}

function addToHistory(item) {
  // Adicionando um novo item à lista de histórico
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  historyList.appendChild(li);
}

function getHistory() {
  // Comunicando com a camada de acesso a dados para recuperar o histórico
  return JSON.parse(localStorage.getItem("calculatorHistory")) || [];
}

function clearHistory() {
  // Limpa o histórico no armazenamento local
  localStorage.removeItem("calculatorHistory");

  // Atualiza a exibição do histórico na página
  displayHistory();
}

function limparHistorico() {
  // Chama a função para limpar o histórico
  clearHistory();
  // Informa ao usuário que os dados foram limpos
  alert("Dados do histórico foram limpos com sucesso!");
}
