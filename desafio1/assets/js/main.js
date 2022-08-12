const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value;

  parseFloat(peso);
  parseFloat(altura);

  let calculo = (peso / altura ** 2).toFixed(1);

  if (calculo <= 18.5) {
    result(`O seu IMC é de: ${calculo} e de acordo com a tabela você esta com Abaixo do peso`);
    return;
  } else if (calculo <= 24.9) {
    result(`O seu IMC é de: ${calculo} e de acordo com a tabela você esta com Peso normal`);
    return;
  } else if (calculo <= 29.9) {
    result(`O seu IMC é de: ${calculo} e de acordo com a tabela você esta com Sobrepeso`);
    return;
  } else if (calculo <= 34.9) {
    result(`O seu IMC é de: ${calculo} e de acordo com a tabela você esta com Obesidade grau 1`);
    return;
  } else if (calculo <= 39.9) {
    result(`O seu IMC é de: ${calculo} e de acordo com a tabela você esta com Obesidade grau 2`);
    return;
  } else if (calculo >= 40) {
    result(`O seu IMC é de: ${calculo} e de acordo com a tabela você esta com Obesidade grau 3`);
    return;
  }
});

function result(msg) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const p = document.createElement('p');
  p.innerHTML = msg;
  resultado.appendChild(p);
}
