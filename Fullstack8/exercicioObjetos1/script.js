let nave = {
  velocidade: 0,
  acelerar: (aceleracao) => {
    this.velocidade += aceleracao;
  },
};

function registrarNave() {
  nave.nome = prompt("informe o nome da nave");
  nave.type = prompt("informe o tipo da nave");
  nave.velocidadeMaxima = Number(
    prompt("informe a velocidade máxima da nave (Km/s")
  );
}

function acelerar() {
  let aceleracao = Number(
    prompt("Qual o valor que você deseja acelerar? (Km/s)")
  );
  nave.acelerar(aceleracao);
  if (nave.velocidade > nave.velocidadeMaxima) {
    alert(
      "Você está com " +
        novaVelocidade +
        " m/s. Sua valocidade máxima deve ser de " +
        velocidadeMaxima
    );
  }
}
function pararNave() {
  nave.velocidade = 0;
  alert("Nave " + nave.nome + "está a " + nave.velocidade + ". Parou!!");
}
function mostrarMenu() {
  let escolha;
  do {
    escolha = prompt("Você deseja:\n1 = Acelerar\n2 - Parar");
    switch (escolha) {
      case "1":
        acelerar();
        break;
      case "2":
        pararNave();
        break;
      default:
        alert("opção inválida");
    }
  } while (escolha != "2");
  {
  }
}
registrarNave();
mostrarMenu();
