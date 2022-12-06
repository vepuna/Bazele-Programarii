const n = parseInt(prompt("колличество чисел"));
let min = 0;
let max = 0;

for(let i = 0; i < n; i++){
  const m = parseInt(prompt("число"));
  if(m > max){
    max = m;
  }else if (m < min){
    min = m;
  }
}

alert(`min : ${min}, max ${max}`)
