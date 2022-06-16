//Массивы. Удаление элемента по индексу. splice()

//Удаление элементов с 3 индекса
const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const deleted = people.splice(3);
console.log(deleted);   //['Alice', 'Kate']
console.log(people);    //['Tom', 'Sam', 'Bill']

//удаление элементов с конца, отрицательный индекс
const people1 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const deleted1 = people1.splice(-1);
console.log(deleted1);  //['Kate']
console.log(people1);   //['Tom', 'Sam', 'Bill', 'Alice']

//удаление с первого индекса трех элементов
const people2 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const deleted2 = people2.splice(1, 3);
console.log(deleted2);  //['Sam', 'Bill', 'Alice']
console.log(people2);   //['Tom', 'Kate']

//вставляем новые элементы вместо удаляемых
const people3 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const deleted3 = people3.splice(1, 3, "Ann", "Bob");
console.log(deleted3);  //['Sam', 'Bill', 'Alice']
console.log(people3);   //['Tom', 'Ann', 'Bob', 'Kate']
