const inversNumber = (num) => {
  num = num.toString().split('').reverse().join('');
  return num;
}
console.log(inversNumber(452956))


