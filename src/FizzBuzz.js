
function EsValor1(n) {
  return n === 1;
}

function EsMultiploDe3(n) {
  return n % 3 === 0;
}

function EsMultiploDe5(n) {
  return n % 5 === 0;
}

export function ConvertirFizzBuzz(n) {
  if(EsValor1(n)) {
    return '1';
  }
  if (EsMultiploDe3(n)) {
    return 'Fizz';
  }
  if (EsMultiploDe5(n)) {
    return 'Buzz';
  }
  return `${n}`;
}