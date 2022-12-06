let value = prompt("Data");

value = value.split('');
// замена первой цифры на последнюю
// [value[0], value[3]] = [value[3], value[0]]

// значение по середине 
// [value[1], value[2]] = [value[2], value[1]];

// 00 по середине
// [value[1], value[2]] = [0,0];

alert(value);