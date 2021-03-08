const pessoas = ["Diego", "Pedro", "Zé"];

console.log("Usando for simples");
for (let i = 0; i < pessoas.length; i++) {
  const pessoa = pessoas[i];
  console.log(`Pessoa ${i + 1}: ${pessoa}`);
}

console.log("Usando for..of");
for (const pessoa of pessoas) {
  console.log(`Pessoa: ${pessoa}`);
}

console.log("For sem array");
for (let i = 1; i <= 8; i++) {
  console.log(`Contando: ${i}`);
}
