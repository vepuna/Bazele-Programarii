let num = prompt('Введите число');
let count = 0;
while(num > 1 && (num /= 10)) {
    count++;
    console.log(count);
}
alert(`Колличество чисел: ${count}.`);
