//class. Свойства для чтения
class Person {
    #age = 1;
    #name;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    //метод set выключаем
    //set name(value) { this.#name = value };
    get name() { return this.#name };
    set age(value) { if (value > 0 && value < 110) this.#age = value };
    get age() { return this.#age };
}

const tom = new Person("Tom", 37);
console.log(tom.name);  //Tom
tom.name = "Bob";   //ничего не даст, метод set выключен, иначе имя поменять можно
console.log(tom.name);  //Tom