const euros = [29.76, 41.85, 46.5];

const sum = euros.reduce((result, value) => result + value);

console.log(sum); // 118.11

const averageMethod1 = euros.reduce(
  (result, val, idx, arr) => result + val / arr.length,
  0
);

console.log(averageMethod1); // 39.370000000000005

const averageMethod2 = euros.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
});

console.log(averageMethod2); // 39.37

/* just like map method*/

const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);

console.log(doubled); // [ 59.52, 83.7, 93 ]

/*just like filter method */

const above40 = euros.reduce((total, amount) => {
  if (amount > 40) {
    total.push(amount);
  }
  return total;
}, []);

console.log(above40); // [ 41.85, 46.5 ]

/*creating a tally */

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "apple"
];

const counts = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

console.log(counts); // { banana: 2, cherry: 3, orange: 3, apple: 3 }

const all = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = 1;
  return tally;
}, {});

console.log(all); // { banana: 1, cherry: 1, orange: 1, apple: 1 }

const counts2 = fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});

console.log(counts2); // { banana: 2, cherry: 3, orange: 3, apple: 3 }

/*flattening an array of arrays */

const data = [
  { a: "happy", b: "robin", c: ["blue", "green"] },
  { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
  { a: "sad", b: "goldfish", c: ["green", "red"] }
];

const colors = data.reduce((total, amount) => {
  amount.c.forEach(color => {
    total.push(color);
  });
  return total;
}, []);

console.log(colors); // [ 'blue','green', 'green', 'black', 'orange', 'blue', 'green', 'red' ]

const uniqueColors = data.reduce((total, amount) => {
  amount.c.forEach(color => {
    if (total.indexOf(color) === -1) {
      total.push(color);
    }
  });
  return total;
}, []);

console.log(uniqueColors); // [ 'blue', 'green', 'black', 'orange', 'red' ]
