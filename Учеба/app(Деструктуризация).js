//Деструктуризация
//имеется объект
const user = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};

// деструктуризация или извлечение значений в отдельные переменные
let { name, email } = user;

console.log(name);
console.log(email);