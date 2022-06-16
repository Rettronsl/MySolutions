//Массивы. Копирование массива. slice()

//Неглубокое копирование (Shallow copy)
const users = ["Tom", "Sam", "Bill"];
console.log(users); //['Tom', 'Sam', 'Bill']

//неглубокое копирование
const people = users;

people[1] = "Mike"; //изменяем второй элемент, фактически меняется один и тот же массив
console.log(users); //['Tom', 'Mike', 'Bill']

//глубокое копирование (deep copy)
const users1 = ["Tom", "Sam", "Bill"];
console.log(users1);    //['Tom', 'Sam', 'Bill']

//глубокое копирование
const people1 = users.slice();

people1[1] = "Mike";    //изменяем второй элемент
console.log(users1);    //['Tom', 'Sam', 'Bill']
console.log(people1);   //['Tom', 'Mike', 'Bill']

//копирование части массива с 1 по 4 индекс не включая.
const users2 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const people2 = users2.slice(1, 4);
console.log(people2);   //['Sam', 'Bill', 'Alice']

//если указан только начальный индекс, то копирование выполняется до конца массива
const users3 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const people3 = users3.slice(2);
console.log(people3);   //['Bill', 'Alice', 'Kate']
