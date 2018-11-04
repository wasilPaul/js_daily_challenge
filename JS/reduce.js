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

/* like map */

const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);

console.log(doubled); // [ 59.52, 83.7, 93 ]


