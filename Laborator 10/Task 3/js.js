const palindrome = (str) => {
  let check = '';
  for (let i = str.length - 1; i >= 0; --i) {
    check += str[i];
  }
  return str == check;
}

console.log(palindrome('hih'))