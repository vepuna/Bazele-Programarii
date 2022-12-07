const n = parseInt(prompt("Колличество чисел в массиве"));
const array = [];
const arrayPar = [];
const arrayImpar = [];
let k = 0;
for (let i = 0; i < n; i++) {
  const number = parseInt(prompt("число"));
  array.push(number);
}
for (let i = 0; i < n; i++) {
  if (i % 2) {
    arrayImpar.push(array[i]);
  } else {
    arrayPar.push(array[i]);
  }
}

console.log(array);
alert(`четные позиции ${arrayPar}, нечетные позиции ${arrayImpar}`);
