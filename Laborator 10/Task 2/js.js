let n = prompt("слово");
let c1 = prompt("заменить ");
let c2 = prompt("на ");

n = n.split("");
for (let i = 1; i <= n.length; i++) {
  if (n[i] == c1) {
    n[i] = c2;
  }
}
n = n.join("");
console.log(n);
