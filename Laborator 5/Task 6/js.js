let n = prompt("число");

n = n.slice('');
let par = 0;
let impar = 0;

for(let i = 0; i < n.length; i++){
  if(n[i] % 2){
    impar += 1;
  } else {
    par += 1;
  }
}

alert(`Четные ${par}, нечетные ${impar}`);

