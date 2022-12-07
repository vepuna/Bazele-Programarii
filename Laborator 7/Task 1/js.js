const cmmdc = (a, b, c) => {
  let max = 0;
  let maxDivizor = 0;

  if (a > b && a > c) max = a;
  else if (b > c) max = b;
  else max = c;
  


  for (let i = 0; i <= max; i++) {
    if ((a % i === b % i && a % i === c % i && b % i === c % i)) {
      maxDivizor = i;
    }
  }
  console.log(`${maxDivizor} максимальный делитель`);
};

cmmdc(12, 8, 4);
