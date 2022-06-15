//Массивы. Передача аргументов функции
const people = ["Tom", "Sam", "Bob"];

function print(first, second, third) {
    console.log(first);
    console.log(second);
    console.log(third);
}
//spread оператор делит массив на аргументы функции
print(...people);
//  Tom
//  Sam
//  Bob

//Второй пример
function sum(a, b, c) {
    const d = a + b + c;
    console.log(d);
}
sum(1, 2, 3);   //6
const nums = [4, 5, 6];
sum(...nums);   //15

/*Если количество параметров функции меньше количества элементов массива, 
оставшиеся элементы будут отброшены.*/
const people1 = ["Tom", "Sam", "Bob", "Mike"];
const people2 = ["Alex", "Bill"];

function print(first, second, third) {
    console.log(`${first}, ${second}, ${third}`);
}
print(...people1);  //Tom, Sam, Bob
print(...people2);  //Alex, Bill, undefined