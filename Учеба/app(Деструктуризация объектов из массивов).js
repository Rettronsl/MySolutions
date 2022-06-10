//Деструктуризация объектов из массивов
let people = [
    { name: "Tom", age: 34 },
    { name: "Bob", age: 23 },
    { name: "Sam", age: 32 }
];

let [, { name }] = people;

console.log(name);  //Bob

//Деструктуризация параметров
//функция берет из объекта имя и возраст
function display({ name: userName, age: userAge }) {
    console.log(userName, userAge);
}

//функция берет первые три значения из массива
function sum([a, b, c]) {
    const result = a + b + c;
    console.log(result);
}

let user = { name: "Alice", age: 33, email: "alice@gmail.com" };
let numbers = [3, 5, 7, 8];

display(user);  //Alice 33
sum(numbers);   //15
