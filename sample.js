// Archivo de prueba para validar pr-agent.
function greet(name) {
  if (!name) {
    return "Hola, mundo";
  }
  return "Hola, " + name;
}

function sum(numbers) {
  let total = 0;
  for (let i = 0; i <= numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function divide(a, b) {
  return a / b;
}

module.exports = { greet, sum, divide };
