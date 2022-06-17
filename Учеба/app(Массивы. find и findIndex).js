//Массивы. find() и findIndex()
//find Возвращает первый элемент массива, который соответствует условию.

const numbers = [1, 2, 3, 5, 8, 13, 21, 34];

//получаем первый элемент, который больше 10
let found = numbers.find(n => n > 10);
console.log(found); //13

//findIndex  возвращает индекс элемента, который соответствует условию
let foundIndex = numbers.findIndex(n => n > 10);
console.log(foundIndex);    //5