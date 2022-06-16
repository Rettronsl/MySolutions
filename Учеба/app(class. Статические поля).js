//class Статические поля
//Относятся ко всему классу, а не к отдельному объекту

class Person {
    static retirementAge = 65;  //статическое поле
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Имя: ${this.name} Возраст: ${this.age}`);
        console.log(`Пенсионный возраст: ${this.retirementAge}`);   //нельзя обратиться через this
        console.log(`Пенсионный возраст: ${Person.retirementAge}`); //правильное решение
    }
}
console.log(Person.retirementAge);  //65
//чтобы получить или илзменить значение статического поля надо использовать имя класса
Person.retirementAge = 62;
console.log(Person.retirementAge);  //62

