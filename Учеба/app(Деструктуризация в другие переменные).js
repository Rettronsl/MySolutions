//Деструктуризация
//Получение свойств объекта в переменные с другим именем
const user = {
    name: "Tom",
    age: 24,
    phone: "+759636487",
    email: "tom@gmail.com"
};

//Извлекаем данные из user в константу с собственными именами
const { name: userName, email: mailAdress } = user;

console.log(userName);
console.log(mailAdress);
