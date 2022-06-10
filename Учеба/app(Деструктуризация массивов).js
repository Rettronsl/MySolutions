//Деструктуризация массивов
let users = ["Tom", "Sam", "Bob"];
let [a, b, c] = users;

console.log(a); //Tom
console.log(b); //Sam
console.log(c); //Bob

//если переменных меньше, чем элементов массива, то оставшиеся элементы массива опускаются
let [a1, b1] = users;

console.log(a1);    //Tom
console.log(b1);    //Sam

//если переменных больше, чем элементов массива, то несопоставленные переменные получают значение undefined
let [a2, b2, c2, d2] = users;

console.log(a2); //Tom
console.log(b2); //Sam
console.log(c2); //Bob
console.log(d2);    //undefined