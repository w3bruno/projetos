const arrayNaves = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];
// filter puxa os elementos que tem mais de 9 passageiros, segundo parametro do array. O map filtra dentro dos resultados e mostra somente o parâmetro 0, que é o nome
let filtroNove = arrayNaves
  .filter((element) => {
    return element[1] > 9;
  })
  .map((element) => {
    return element[0];
  });
console.log(filtroNove);

//findindex acha o primeiro elemento que satisfaz a condição da arrowFunction
let onPlataforma = arrayNaves.findIndex((element) => {
  return element[2] == false;
});
console.log(onPlataforma);

let caixaAlta = arrayNaves.map((element) => {
  return element[0].toUpperCase();
});
console.log(caixaAlta);

let message = "Espaçonaves com mais de 9 tripulantes: " + filtroNove.join(", ");
message += "\nPlataforma com processo de engate: " + (onPlataforma + 1);
message += "\nNome das naves em caixa alta: " + caixaAlta.join(", ");
console.log(message);

alert(message);
