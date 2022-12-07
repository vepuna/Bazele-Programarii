const item =(p, q) => {
  let pl = p * q;
  let pr = p + q;
  alert(`Площадь: ${pl}, Периметр ${pr} `);
}
let p = parseInt(prompt('Первое значение'));
let q = parseInt(prompt('Второе число'));
item(p,q);


item(2,5);

