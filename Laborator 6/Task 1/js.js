const ecuatii = (a, b, c) => {
  let d = 0;
  let x1 = 0;
  let x2 = 0;

  d = (b**2) - 4*a*c;
  if(d >= 0){
    x1 = (+b - Math.sqrt(d))/d;
    x2 = (-b - Math.sqrt(d))/d;
    alert(`d ${d}, x1 ${x1}, x2 ${x2}`);
  }else{
    alert('Opps...')
  }
  
};

ecuatii(9,4,3);