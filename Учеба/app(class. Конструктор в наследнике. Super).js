//class. Конструктор в наследнике.Super
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}
class Employee extends Person {
    constructor(name, age, company) {
        super(name, age);   //ссылаемся на конструктор базового класса
        this.company = company;
    }
    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
}

const tom = new Person("Tom", 34);
tom.print();    //Name: Tom Age: 34

const sam = new Employee("Sam", 25, "Google");
sam.print();    //Name: Sam Age: 25
sam.work(); //Sam works in Google