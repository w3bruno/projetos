let departureDateEntry = prompt(
  "Digite a data de partida (formato DD/MM/YYYY)"
);

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = today - departureDate;

let secondsDeparture = Math.round(dateDiff / 1000);
alert(secondsDeparture);
