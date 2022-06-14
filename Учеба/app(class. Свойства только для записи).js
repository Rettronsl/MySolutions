//class. Свойства только для записи
class Person {
    #id;    //приватное поле
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    //сеттер только для записи
    set id(value) { this.#id = value };
    print() {
        console.log(`id: ${this.#id} name: ${this.name} age: ${this.age}`);
    }
}

const tom = new Person("Tom", 37, 1);
tom.print();    //id: 1 name: Tom age: 37
tom.id = 55;    //устанавливаем id
tom.print();    //id: 55 name: Tom age: 37
console.log(tom.id);    //undefined. Значение свойства нельзя получить

