const value = prompt("Колличество чисел");

let par = 0;
let impar = 0;

for(let i = 0 ; i< value; i++){
  let number = parseInt(prompt('Число'));
  if(number % 2){
    impar += number
  } else {
    par += number;
  }
}

alert(`Сумма нечетных ${impar}, Сумма четных ${par}`);
