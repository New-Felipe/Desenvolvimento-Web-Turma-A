const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function perguntar(texto) {
return new Promise((resolve) => {
rl.question(texto, (resposta) => {
resolve(resposta.trim());
});
});
}

function calcularIMC(peso, altura) {
return peso / (altura * altura);
}

function classificarIMC(imc) {
if (imc < 18.5) {
return "Abaixo do peso.";
} else if (imc < 25) {
return "Peso normal.";
} else if (imc < 30) {
return "Sobrepeso.";
} else if (imc < 35) {
return "Obesidade grau I.";
} else if (imc < 40) {
return "Obesidade grau II.";
} else {
return "Obesidade grau III.";
}
}

async function iniciar() {
const quantidadeInput = await perguntar(
"Quantos pacientes deseja cadastrar? "
);

if (isNaN(quantidadeInput) || Number(quantidadeInput) <= 0) {
console.log("Digite uma quantidade válida.");
rl.close();
return;
}

const quantidade = Number(quantidadeInput);

for (let i = 1; i <= quantidade; i++) {
console.log(`\n===== PACIENTE ${i} =====`);

const pesoInput = await perguntar("Digite o peso em kg: ");
const alturaInput = await perguntar("Digite a altura em metros: ");

if (isNaN(pesoInput) || isNaN(alturaInput)) {
console.log("Digite apenas números válidos.");
i--;
continue;
}

const peso = Number(pesoInput);
const altura = Number(alturaInput);

if (peso <= 0 || altura <= 0) {
console.log("O peso e a altura devem ser maiores que zero.");
i--;
continue;
}

const imc = calcularIMC(peso, altura);

const classificacao = classificarIMC(imc);

console.log("\n----------------------------");
console.log(`Paciente: ${i}`);
console.log(`Peso: ${peso.toFixed(2)} kg`);
console.log(`Altura: ${altura.toFixed(2)} m`);
console.log(`IMC: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);
console.log("----------------------------");
}

console.log("\nTodos os pacientes foram processados!");

rl.close();
}

iniciar();