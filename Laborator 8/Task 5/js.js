const n = parseInt(prompt("Колличество чисел в массиве"));
const array = [];
let k = 0;
let s = 1;
let elemente = 0;
for (let i = 0; i < n; i++) {
  const number = parseInt(prompt('число'));
  array.push(number);
}

for (let i = 1; i < n; i++) {
  
  if (array[k] % 2) {
    k += 2
    elemente += array[i];
    s++
  }
}
elemente /= s;

console.log(elemente);