const value = parseInt(prompt("Data"));

let i = 0;
let c = true;
while (c) {
  if (value - 7 > 0) {
    i++;
  } else if (value - 7 < 0) {
    break;
  }
}

console.log(i);
