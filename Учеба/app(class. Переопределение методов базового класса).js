//class. Переопределение методов базового класса
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
} class Employee extends Person {
    constructor(name, age, company) {
        super(name, age);   //наследуем конструктор
        this.company = company;
    }
    print() {
        super.print();  //наследуем метод
        console.log(`Company: ${this.company}`);
    }
    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
}

const sam = new Employee("Sam", 25, "Google");
sam.print();    //Name: Sam Age: 25
//Company: Google