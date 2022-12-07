const n = parseInt(prompt("Колличество чисел в массиве"));
const array = [];

for (let i = 0; i < n; i++) {
  const number = parseInt(prompt("число"));
  array.push(number);
}
for (let i = 0; i < n; i++) {
  if (array[i] % 2) {
    alert("содержит нечетные");
    break;
  }
}

alert(array);
