let array = [];

for (let i = 0; i < 5; i++) {
  array.push([]);
  for (let k = 0; k < 5; k++) {
    let k = Math.floor(Math.random() * 9);
    array.push(([i][k] = k));
  }
}


for (let i = 0; i < 5; i++) {

  let summ = 0;
  let maxValue = 0;
  for (let k = 0; k < 5; k++) {
    summ += array[i][k];
    if (array[i][k] > maxValue) {
      maxValue = array[i][k];
      array[i][k] = summ;
    }
  }
}

console.log(array);
