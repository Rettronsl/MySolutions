//Массивы. Includes()
//Проверка наличия элемента в массиве

const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
console.log(people.includes("Tom"));    //true
console.log(people.includes("Kate"));   //false

//В качестве второго параметра принимается индекс элемента массива с которого надо искать
const people1 = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
console.log(people1.includes("Bob", 2));    //true
console.log(people1.includes("Bob", 4));    //false

//При передаче отрицательного значения поиск идет с конца и далее по массиву!
const people2 = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
console.log(people2.includes("Tom", -2));   //false
console.log(people2.includes("Tom", -3));   //true
