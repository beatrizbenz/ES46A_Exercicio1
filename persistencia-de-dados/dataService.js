// persistencia-de-dados/dataService.js
function addToHistory(item) {
  // Salvando o historico no armazenamento local
  const calculatorHistory =
    JSON.parse(localStorage.getItem("calculatorHistory")) || [];
  calculatorHistory.push(item);
  localStorage.setItem("calculatorHistory", JSON.stringify(calculatorHistory));
}

function getHistory() {
  // Recuperando o historico
  return JSON.parse(localStorage.getItem("calculatorHistory")) || [];
}

// Exportando as funções para usar em outros módulos
export { addToHistory, getHistory };
