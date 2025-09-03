import { generarCadenaFizzBuzz } from './FizzBuzz';

const inputNumero = document.querySelector('#numero');
const divResultado = document.querySelector('#resultado-div');
const formulario = document.querySelector('#fizzbuzz-form');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const numero = Number.parseInt(inputNumero.value);

  divResultado.innerHTML = `<p> ${generarCadenaFizzBuzz(numero)} </p>`;
});
