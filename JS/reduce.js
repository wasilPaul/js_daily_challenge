const euros = [29.76, 41.85, 46.5];

const sum = euros.reduce((result, value) => result + value);

console.log("sum: ", sum); // 118.11

const averageMethod1 = euros.reduce(
  (result, val, idx, arr) => result + val / arr.length,
  0
);

console.log("averageMethod1: ", averageMethod1); // 39.370000000000005

const averageMethod2 = euros.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
});

console.log("averageMethod1: ", averageMethod2); // 39.37

/* just like map method*/

const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);

console.log("double: ", doubled); // [ 59.52, 83.7, 93 ]

/*just like filter method */

const above40 = euros.reduce((total, amount) => {
  if (amount > 40) {
    total.push(amount);
  }
  return total;
}, []);

console.log("above 40: ", above40); // [ 41.85, 46.5 ]

/*just like a sort method */

let array = [1, 2, 1, 1, 1, 3, 4, 5, 222, 11, 10, 13];

const sorted = array.reduce((sorted, el) => {
  let index = 0;
  while (index < array.length && el > array[index]) index++;
  sorted.splice(index, 0, el);
  return sorted;
}, []);

console.log("sorted: ", sorted); //

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

console.log("counts: ", counts); // { banana: 2, cherry: 3, orange: 3, apple: 3 }

const all = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = 1;
  return tally;
}, {});

console.log("all: ", all); // { banana: 1, cherry: 1, orange: 1, apple: 1 }

const counts2 = fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});

console.log("counts2: ", counts2); // { banana: 2, cherry: 3, orange: 3, apple: 3 }

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

console.log("colors: ", colors); // [ 'blue','green', 'green', 'black', 'orange', 'blue', 'green', 'red' ]

const uniqueColors = data.reduce((total, amount) => {
  amount.c.forEach(color => {
    if (total.indexOf(color) === -1) {
      total.push(color);
    }
  });
  return total;
}, []);

console.log("uniqueColors: ", uniqueColors); // [ 'blue', 'green', 'black', 'orange', 'red' ]
