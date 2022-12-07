const n = parseInt(prompt("Value"));
const numbers = [];
for (let i = 0; i < n; i++) {
  const value = parseInt(prompt("Value"));
  numbers.push(value);
}
const countItems = {};
for (const item of numbers) {
  countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}

const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
alert(result);
