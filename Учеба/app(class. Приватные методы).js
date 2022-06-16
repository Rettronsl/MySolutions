//class Приватные методы
class Person {
    //приватные поля
    #name = "undefined";
    #age = 1;
    constructor(name, age) {
        this.#name = this.#checkName(name);
        this.setAge(age);
    }
    //приватный метод (# не всегда работает работает в nodeJS!)
    #checkName(name) {
        if (name !== "admin") return name;
    }
    //доступный метод
    setAge(age) {
        if (age > 0 && age < 110) this.#age = age;
    }
    print() {
        console.log(`Name: ${this.#name} Age: ${this.#age}`);
    }
}
const tom = new Person("Tom", 37);
tom.print();    //Name: Tom Age: 37
const bob = new Person("admin", 41);
bob.print();    //Name: undefined Age: 41
//Строка ниже выдаст ошибку, так как нельзя обратится к приватному методу
//let personName = bob.#checkName("admin");

