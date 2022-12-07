const n = parseInt(prompt("Колличество чисел в массиве"));
const array = [];

for (let i = 0; i < n; i++) {
  const number = parseInt(prompt('число'));
  array.push(number);
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
}

alert(array);

