//class. Наследование с конструктором
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
    company;
    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
}

const tom = new Person("Tom", 34);
tom.print();    //Name: Tom Age: 34

const sam = new Employee("Sam", 25);    //унаследованный конструктор
sam.print();    //Name: Sam Age: 25
sam.company = "Google";
sam.work(); //Sam works in Google
