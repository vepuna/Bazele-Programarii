let value = prompt("Data");

let result = 0;
for (let i = 1; i < 4; i++) {
  result += parseInt(value.slice(i, 4));
}
alert(result);
