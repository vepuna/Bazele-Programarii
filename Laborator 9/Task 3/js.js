const n = parseInt(prompt("Колличество чисел в массиве"));
const array = [];

for (let i = 0; i < n; i++) {
  const number = parseInt(prompt("число"));
  array.push(number);
}
for (let i = 0; i < n; i++) {
  if (array[i] > array[i + 1]) {
    alert("не сортирован");
    break;
  }
}

alert(array);
