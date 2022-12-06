let elements = [];

for (let i = 100; i < 1000; i++) {
  let value = 0;
  value = i.toString();
  
  value = value.slice("");
  
  if (!((value[0] + value[1] + value[2]) % 5)) {
    elements.push(value);
  }
}
console.log(elements);
