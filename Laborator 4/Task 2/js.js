const k = parseInt(prompt("Делитель"));
const n = parseInt(prompt("колличество чисел"));
const numbers = [];

for (let i = 0; i < n; i++) {
  let number = parseInt(prompt("число"));
  if (!(number % k)) {
    numbers.push(number);
  }
}
alert(numbers);
