let value = parseInt(prompt("Value"));
let value2 = parseInt(prompt("Unitate"));

switch(value2){
  case 1: alert(`${value*(0.1)}`);
  break;
  case 2: alert(`${value*1000}`);
  break;
  case 3: alert(`${value}`);
  break;
  case 4: alert(`${value*(0.001)}`);
  break;
  case 5: alert(`${value*(0.01)}`);
}
