let value = parseInt(prompt("zi"));
let value2 = parseInt(prompt("luna"));
let value3 = parseInt(prompt("an"));

if (value === 31 && value2 === 12) {
  value = 1;
  value2 = 1;
  value3 += 1;
} else if (value === 31 && value2 <= 12) {
  value = 1;
  value2 += 1;
} else {
  value += 1;
}

alert(`${value} ${value2} ${value3}`);
