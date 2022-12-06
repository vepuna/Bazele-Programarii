for (let i = 10; i <= 99; i++) {
  let k = i%10;
  if (k % 3 == 0 && i % 10 != 0) {
      console.log(i);
  }
  else continue;
}


