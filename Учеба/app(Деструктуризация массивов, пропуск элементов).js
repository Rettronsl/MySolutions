//Деструктуризация массивов
//Сведение оставшихся элементов массива в другой массив
let users = ["Tom", "Sam", "Bob", "Mike"];
let [tom, ...others] = users;

console.log(tom);   //Tom
console.log(others);    //["Sam", "bob", "Mike"]

//пропуск элементов
let [first, , , fourth] = users;

console.log(first); //Tom
console.log(fourth);    //Mike