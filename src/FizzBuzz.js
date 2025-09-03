function EsMultiploDe3(n) {
  return n % 3 === 0;
}
function EsValor1(n) {
  return n === 1;
}

export function ConvertirFizzBuzz(n) {
  if(EsValor1(n)) {
    return '1';
  }
  if (EsMultiploDe3(n)) {
    return '1';
  }
}