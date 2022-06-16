//class Приватные статические поля и методы
class Person {
    static #retirementAge = 65; //приватное статическое поле
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Имя: ${this.name} Возраст: ${this.age}`);
    }
    static calculateRestAges(person) {
        if (this.#retirementAge > person.age) {
            const restAges = this.#retirementAge - person.age;
            console.log(`До пенсии осталось ${restAges} лет`);
        }
        else console.log("Вы уже на пенсии");
    }
}

//console.log(Person.#retirementAge);   Ошибка! Поле retirementAge приватное
const tom = new Person("Tom", 37);
Person.calculateRestAges(tom);  //До пенсии осталось 28 лет
const bob = new Person("Bob", 71);
Person.calculateRestAges(bob);  //Вы уже на пенсии