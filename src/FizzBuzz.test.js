import { ConvertirFizzBuzz, generarCadenaFizzBuzz } from "./FizzBuzz";

describe('Ejemplo de FizzBuzz', () => {
  it('debería retornar 1', () => {
    expect(ConvertirFizzBuzz(1)).toEqual('1');
  });

  it('debería retornar Fizz', () => {
    expect(ConvertirFizzBuzz(3)).toEqual('Fizz');
  });
});