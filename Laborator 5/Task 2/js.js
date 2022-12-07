let value = true;
let array = [];
let k = null;

do {
  const n = prompt("число");
  if (n <= 0) {
    break;
  } else {
    k = n.slice("");
    if (k[0] == k[1]) {
      array.push(n);
    }
  }
} while (value);
alert(array);
