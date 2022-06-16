//Массивы. sort()

//Сортирует массив по возрастанию
const people = ["Tom", "Sam", "Bob"];
people.sort();
console.log(people);    //['Bob', 'Sam', 'Tom']

//По умолчанию метод sort рассматривает элементы массива как строки

//Для чисел логику сортировки определяем сами
const numbers = [200, 15, 5, 35];
numbers.sort((a, b) => a - b);
console.log(numbers);   //[5, 15, 35, 200]
