const n = parseInt(prompt("Колличество чисел в массиве"));
const array = [];
let position = 0;

for (let i = 0; i < n; i++) {
  const number = parseInt(prompt("число"));
  array.push(number);
}
for (let i = 0; i < n; i++) {
  if (array[i] === 0) {
    position = i;
  }
}

alert(`Последняя позиция 0 : ${position}`);
