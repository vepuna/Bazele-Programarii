const n = parseInt(prompt('Колличество чисел в массиве'));
const array = []

for(let i = 0; i < n; i++){
  const number = parseInt(prompt('число'));
  array.push(number);

  if(array[i] != 0){
    array[i] *= -1; 
  }
}
alert(array);