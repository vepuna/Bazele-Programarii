let k = 300
let secondOrder = []
for(let i = 100; i <= k; i++){
  let number = i.toString().split('');
  let firstOrder = null;
  

  if(number[0] === number[2] ){
    firstOrder = i;
    firstOrder **= 2;
    firstOrder = i.toString().split('');
    if(firstOrder[0] === firstOrder[2] ){
      secondOrder.push(i);
    }
  
  }
}
console.log(secondOrder);