let str = prompt("слово");
const n = parseInt(prompt("индекс замены"));
const array = [];
let k = "Выход : ";
str = str.split("");

for (let i = 1; i <= n; i++) {
  k += str[n];
}

alert(k);
