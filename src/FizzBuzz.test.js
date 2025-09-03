import { ConvertirFizzBuzz, generarCadenaFizzBuzz } from "./FizzBuzz";

describe('Ejemplo de FizzBuzz', () => {
  it('debería retornar 1', () => {
    expect(ConvertirFizzBuzz(1)).toEqual('1');
  });
    it('debería retornar Fizz si es igual a 3', () => {
    expect(ConvertirFizzBuzz(3)).toEqual('Fizz');
  });
  it('debería retornar Fizz', () => {
    expect(ConvertirFizzBuzz(3)).toEqual('Fizz');
  });
  it('debería retornar Buzz', () => {
    expect(ConvertirFizzBuzz(5)).toEqual('Buzz');
  });
});