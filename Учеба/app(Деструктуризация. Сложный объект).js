//Деструктуризация. Сложный объект
//если свойство было сложным объектом, то после извлечения свойство будет также сложным объектом
let user = {
    name: "Tom",
    age: 24,
    account: {
        login: "tom55",
        password: "qwerty"
    }
};

//Деструктуризация
const { account } = user;

console.log(account.login); //tom55
console.log(account.password);  //qwerty

//необязательно получать весь объект, можно отдельные свойства
let { name, account: { login } } = user;

console.log(name);  //Tom
console.log(login); //tom55