const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu peso em kg: ", (peso) => {
  rl.question("Digite sua altura em metros: ", (altura) => {
    const pesoNumerico = Number(peso);
    const alturaNumerica = Number(altura);

    const imc = pesoNumerico / (alturaNumerica * alturaNumerica);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc >= 25) {
      console.log("Você está acima do peso.");
    } else {
      console.log("Você está abaixo do peso.");
    }

    rl.close();
  });
});
