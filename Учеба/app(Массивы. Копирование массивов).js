
//Массивы. Копирование массивов

//создаются два массива
const people = ["Sam", "Tom", "Bob"];
const employees = [...people];
employees[0] = "Dan";
console.log(employees); //['Dan', 'Tom', 'Bob']
console.log(people);    //['Sam', 'Tom', 'Bob']

//Но если копировать массив объектов, то изменения коснутся оба объекта
const people1 = [{ name: "Sam" }, { name: "Tom" }, { name: "Bob" }];
const employees1 = [...people1];

//правильная замена первого объекта
//employees1[0] = { name: "Dan" };

//неправильная замена первого объекта
employees1[0].name = "Dan";

console.log(employees1);    // {name: 'Dan'}, {name: 'Tom'}, {name: 'Bob'}
console.log(people1);   // {name: 'Dan'}, {name: 'Tom'}, {name: 'Bob'}