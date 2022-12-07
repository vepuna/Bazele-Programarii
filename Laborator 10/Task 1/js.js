let n = prompt("слово");
n = n.split('');
for(let i = 1; i <= n.length; i++){
  if(i%2){
    n[i] = '*';
}

}
n = n.join('')
console.log(n)  
  


