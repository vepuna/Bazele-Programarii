const A = parseInt(prompt('Num A:'));
const B = parseInt(prompt('Num B:'));
const C = parseInt(prompt('Num C:'));

let MAX = (a, b, c) => {
    const item1 = ((a-b)+a);
    const item2 = (a+(b+c));
    const item3 = ((a+b)+(a-c));
    
    console.log(item1,item2,item3);
}

MAX(A,B,C);