//Строки. Шаблоны строк

const name = "Tom";
let age = 37;
const userInfo = `${name} is ${age} years old`;
console.log(userInfo);  //Tom is 37 years old


//Вместо скалярных значений можно использовать свойства сложных объектов
const bil = {
    name: "Bill",
    age: 22
}
const bilInfo = `${bil.name} is ${bil.age} years old`;
console.log(bilInfo);   //Bill is 22 years old

//Можно вставлять сложные вычисляемые значения
function sum(x, y) {
    return x + y;
}
let a = 5;
let b = 4;

const result = `${a}+${b}=${sum(a, b)}`;
console.log(result);    //5+4=9

let expression = `${a}*${b}=${a * b}`;
console.log(expression);    //5*4=20