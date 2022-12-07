let produsulSuma = (a) => {
  let sum = 0;
  let produs = 1;
  a = a.toString().split('');
  console.log(a);
  for(let i = 0; i < a.length; i++){
    sum += parseInt(a[i]);
    produs *= parseInt(a[i]);
  }
  console.log(`Summa ${sum}, produs ${produs}`)
}

produsulSuma(12232211556)
