const n = parseInt(prompt("Колличество чисел в массиве"));
const array = [];
let k = 0;
for (let i = 0; i < n; i++) {
  const number = parseInt(prompt("число"));
  array.push(number);
}
for (let i = 0; i < n; i++) {
  if (array[i + 1] < 0) {
    k++;
  }
}
console.log(array);
alert(k);
