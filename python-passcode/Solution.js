const frutas = [
  "banana",
  "maça",
  "arroz",
  "legumes",
  "feijão",
  "abacate",
  "jacarandá",
  "x",
  "y",
];
for (let index = 0; index < frutas.length; index++) {
  switch (index) {
    case 0:
      message = "Zero";
      break;
    case 1:
      message = "Um";
      break;
    case 2:
      message = "Dois";
      break;
    case 3:
      message = "Três";
      break;
    case 4:
      message = "Quatro";
      break;
    case 5:
      message = "Cinco";
      break;
    default:
      message = "Outro valor";
      break;
  }
}
