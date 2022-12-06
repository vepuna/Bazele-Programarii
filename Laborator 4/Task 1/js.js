let value = parseInt(prompt("Data"));
let suma = 0;
if (value % 2) {
  value -= 1;
}

while (value) {
  suma += value;
  console.log(suma);
  value = value - 2;
  if (value <= 0) {
    value = false;
  }
}

alert(suma);
