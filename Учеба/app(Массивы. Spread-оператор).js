//Массивы. Spread-оператор
//Spread-оператор позволяет разложить массив на отдельные значения
const users = ["Tom", "Sam", "Bob"];
console.log(users); //['Tom', 'Sam', 'Bob']

//применяя spread-оператор мы можем наполнить массив значениями из другого массива (3 способа)
const people1 = [...users];
const people2 = new Array(...users);
const people3 = Array.of(...users);

console.log(people1);   //['Tom', 'Sam', 'Bob']
console.log(people2);   //['Tom', 'Sam', 'Bob']
console.log(people3);   //['Tom', 'Sam', 'Bob']