//Массивы. Shift()
//Метод shift() извлекает и удаляет первый элемент из массива
const people = ["Tom", "Sam", "Bob", "Mike"];

//извлекаем из массива первый элемент
const firstPerson = people.shift();
console.log(firstPerson);   //Tom
console.log(people);    //['Sam', 'Bob', 'Mike']
