//class Статические методы
//Определяют поведение всего класса
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Имя: ${this.name} Возраст${this.age}`);
    }
    static printClassInfo() {
        console.log("Класс Person представляет человека");
    }
    static printAge() {
        console.log(this.age);  //для статического метода this.age не существует
    }
}
Person.printClassInfo();    //для вызова применяется мя класса, а не объекта
Person.printAge();  //undefined