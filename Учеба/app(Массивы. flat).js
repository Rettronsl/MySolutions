//Массивы. flat
//Упрощает массив с учетом заданной вложенности элементов
const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];

//без указания количества уровней вложенности выводит первый
const flattenPeople = people.flat();
console.log(flattenPeople); //['Tom', 'Bob', 'Alice', 'Kate',["Sam", "Ann"]]

//уровни вложенности можно указать
const flattenPeople2 = people.flat(2);
console.log(flattenPeople2);    //['Tom', 'Bob', 'Alice', 'Kate', 'Sam', 'Ann']

//если количество уровней неизвестно, то указывыаем значение Infinity
const flattenPeople3 = people.flat(Infinity);
console.log(flattenPeople3);    // ['Tom', 'Bob', 'Alice', 'Kate', 'Sam', 'Ann']