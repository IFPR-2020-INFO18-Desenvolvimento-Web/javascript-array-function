console.log(soma(5, 5));

function soma(n1, n2) {
  return n1 + n2;
}

function teste() {
  console.log("Teste");
}

console.log(soma(1, 2));
console.log(soma(3, 2));

const result = teste();
console.log(result);

// Function expression

// console.log(multiplicacao(5, 4));

const multiplicacao = function (n1, n2) {
  return n1 * n2;
};

console.log(multiplicacao(5, 4));

// Arrow functions

const subtracao = (n1, n2) => {
  return n1 - n2;
};

console.log(subtracao(8, 5));

const divisao = (n1, n2) => n1 / n2;

console.log(divisao(10, 2));

const falarAlgo = mensagem => console.log(mensagem);
falarAlgo("Hello world");
