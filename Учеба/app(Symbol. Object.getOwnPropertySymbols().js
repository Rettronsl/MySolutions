//Symbol. Object.getOwnPropertySymbols()

//Определение
const tom = Symbol("Tom");
console.log(tom);   //Symbol(Tom)

//Символы уникальны. Даже инициализированые одним значением они разные.
const bob = Symbol("Bob");
console.log(bob);   //Symbol(Bob)

const bobas = Symbol("Bob");
console.log(bobas); //Symbol(Bob)

// значение не одинаковы!
console.log(bob == bobas);    //false
console.log(bob === bobas);   //false

//Символы нужны для избегания ситуации, когда свойства объекта имеют одинаковые названия
const company = {
    "Tom": "senior",
    "Sam": "junior",
    "Tom": "junior"
}
//так как свойства имеют одинаковое имя, то выведется всего два.
for (developer in company) {
    console.log(`${developer} - ${company[developer]}`);    //выводим свойство и значение
}   //Tom - junior Sam - junior

// С использованием символов все работает
const company1 = {
    [Symbol("Tom")]: "senior",
    [Symbol("Sam")]: "junior",
    [Symbol("Tom")]: "junior"
}
//Для получения всех символов из объекта используем метод getOwnPropertySymbols
const developers = Object.getOwnPropertySymbols(company1);
for (developer of developers) {
    console.log(`${developer.toString()} - ${company1[developer]}`);    //toString() для получения текстового представления
}   //  Symbol(Tom) - senior Symbol(Sam) - junior Symbol(Tom) - junior

//Свойства с символьными идентификаторами можно добавлять в объект динамически
const company2 = {};
company2[Symbol("Tom")] = "senior";
company2[Symbol("Sam")] = "junior";
company2[Symbol("Tom")] = "junior";

console.log(company2);  //{Symbol(Tom): 'senior', Symbol(Sam): 'junior', Symbol(Tom): 'junior'}