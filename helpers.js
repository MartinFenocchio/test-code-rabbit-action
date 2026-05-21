// Small utility module to test the cost-comment workflow.
function average(numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total / numbers.length;
}

function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

module.exports = { average, clamp };
