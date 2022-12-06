const a = parseInt(prompt("a"));
const b = parseInt(prompt("b"));
const c = parseInt(prompt("c"));

if (a == b && a == c && b == c) {
  alert("равносторонний");
} else if (a == b && a > c && b > c) {
  alert("равнобедренный");
} else if (a < c && b < c && a == b) {
  alert("прямоугольный");
} else {
  alert("другой");
}
