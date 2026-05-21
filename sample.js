// Pequeño archivo de prueba para validar el workflow de CodeRabbit CLI.
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

module.exports = { greet, sum };
