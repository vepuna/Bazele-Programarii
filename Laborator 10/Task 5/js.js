let n = prompt("Слово");

n = n.split('');
let p = 0;

for(let i = 0; i < n.length; i++){
  if(n[i] === n[i+1]){
    p++
  }
}

alert(`numărul de perechi ${p}`);


