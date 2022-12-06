let value = parseInt(prompt("a"));
let value2 = parseInt(prompt("b"));
let value3 = parseInt(prompt("c"));
let value4 = parseInt(prompt("что делаем"));

if (value4 === 1) {
  alert(`${(value + value2 + value3) / 3}`);
} else if (value4 === 2 && value > 0 && value2 > 0 && value3 > 0) {
  alert(`${(value * value2 * value3) ** (1 / 3)}`);
} else {
  alert("Răspuns incorect");
}
