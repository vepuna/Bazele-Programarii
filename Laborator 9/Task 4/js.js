const n = parseInt(prompt("Колличество чисел в массиве"));
const array = [];
let value = null;

for (let i = 1; i <= n; i++){
  value = parseInt(prompt("число"));
  if(!(value >= 1 && value <= n)){
    break;
  }
  array.push(value);
}
console.log(array);

