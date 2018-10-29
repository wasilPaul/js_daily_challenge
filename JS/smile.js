let find = [":)", ";(", ";}", ":-D"];

const smilesNumber = [],
  eyes = [";", ":"],
  noses = ["-", "~"],
  lips = [")", "D"];

const smile1 = eyes.map(eye =>
  noses.map(nose => lips.map(lip => eye + nose + lip))
);

const smile2 = eyes.map(eye => lips.map(lip => eye + lip));

const smiles = smile1
  .concat(smile2)
  .reduce((prev, next) => prev.concat(next))
  .reduce((prev, next) => prev.concat(next));

console.log(smiles);

find.forEach(arg =>
  smiles.forEach(smile => (smile === arg ? smilesNumber.push(arg) : null))
);

console.log(smilesNumber.length);

const countSmileys = arr =>
  arr.filter(val => /[:;][~-]?[D\)]/.test(val)).length;

console.log(countSmileys(find));
