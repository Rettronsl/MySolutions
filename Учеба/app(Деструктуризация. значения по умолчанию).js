//Деструктуризация
//Извлечение в переменную со значением по умолчанию

const user = {
    name: "Tom",
    age: 24
};

const { name = "Sam", email: mailAdress = "sam@gmail.com" } = user;

console.log(name);
console.log(mailAdress);