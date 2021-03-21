let nomeDaNave = prompt("Qual o nome a nave?");
let = velocidade = 0;

function mostrarMenu() {
  let opcao;
  while (opcao != "1" && opcao != "2" && opcao != "3" && opcao != "4") {
    opcao = prompt(
      `O que deseja fazer?
       1 - Acelerar em 5 m/s
       2 - Desacelerar em 5m/s
       3 - Mostrar dados da viagem
       4 - Sair do programa`
    );
  }
  return opcao;
}
mostrarMenu();

function acelerar(velocidade) {
  let novaVelocidade = velocidade + 5;
  return novaVelocidade;
}

function desacelerar(velocidade) {
  let novaVelocidade = velocidade - 5;
  if (novaVelocidade < 0) {
    novaVelocidade = 0;
  }
  return novaVelocidade;
}
function dadosDaViagem(nomeDaNave, velocidade) {
  alert(`A nave ${nomeDaNave} está a ${velocidade}m/s`);
}

do {
  opcaoescolhida = mostrarMenu();
  switch (opcaoescolhida) {
    case "1":
      velocidade = acelerar(velocidade);
      break;
    case "2":
      velocidade = desacelerar(velocidade);
      break;
    case "3":
      dadosDaViagem(nomeDaNave, velocidade);
      break;
    default:
      alert("Encerrando programa de bordo");
  }
} while (opcaoescolhida != 4);
