let value = prompt("value");

value = value.split("");
if (value[0] < value[1]) {
  [value[0], value[1]] = [value[1], value[0]];
  // [value[0], value[3]] = [value[3], value[0]]
} 
if (value[1] < value[2]) {
  [value[1], value[2]] = [value[2], value[1]];
}
alert(value);
