//Массивы. Array.of
//Создание массива
const users = new Array();
const people = [];
console.log(users); //(0) []
console.log(people);    //(0) []

//Создание с инициализацией
const users1 = new Array("Tom", "Bill", "Alice");
const people1 = ["Sam", "John", "Kate"];
console.log(users1);    //['Tom', 'Bill', 'Alice']
console.log(people1);   //['Sam', 'John', 'Kate']

//Инициализация массивов методом Array.of
const people2 = Array.of("Tom", "Bob", "Sam");
console.log(people2);   // ['Tom', 'Bob', 'Sam']