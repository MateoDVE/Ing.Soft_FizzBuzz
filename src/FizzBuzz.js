
function EsValor1(n) {
  return n === 1;
}

function EsMultiploDe3(n) {
  return n % 3 === 0;
}

function EsMultiploDe5(n) {
  return n % 5 === 0;
}

function EsMultiploDe3y5(n) {
  return EsMultiploDe3(n) && EsMultiploDe5(n);
}

export function ConvertirFizzBuzz(n) {
  if (EsMultiploDe3y5(n)) {
    return 'FizzBuzz';
  }
  if (EsMultiploDe3(n)) {
    return 'Fizz';
  }
  if (EsMultiploDe5(n)) {
    return 'Buzz';
  }
  return `${n}`;
}
export function generarCadenaFizzBuzz(n) {
  let resultado = '';
  for (let i = 1; i <= n; i++) {
    resultado += `${ConvertirFizzBuzz(i)}`;
    if (i < n) {
      resultado += ' ';
    }
  }
  return resultado;
}