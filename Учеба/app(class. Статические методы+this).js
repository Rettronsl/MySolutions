//class Статические методы + this
/*если необходимо обратится к свойствам объекта, то определяем в методе параметр
через который в метод будет передаваться объект*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static print(person) {
        console.log(`Имя: ${person.name} Возраст: ${person.age}`);
    }
}
const tom = new Person("Tom", 37);
const bob = new Person("Bob", 41);
Person.print(tom);  //Имя: Tom Возраст: 37
Person.print(bob);  //Имя: Bob Возраст: 41

/*Однако можно использовать this в статических методах для обращения 
к статическим полям и другим статическим методам*/

class Pensioner {
    static retirementAge = 65;  //возраст выхода на пенсию
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Имя ${this.name} Возраст ${this.age}`);
    }
    static calculateRestAges(pensioner) {
        if (this.retirementAge > pensioner.age) {
            const restAges = this.retirementAge - pensioner.age;
            console.log(`До пенсии осталось ${restAges} лет`);
        }
        else console.log("Вы уже на пенсии");
    }
}
const evgene = new Pensioner("Evgen", 38);
Pensioner.calculateRestAges(evgene);    //До пенсии осталось 27 лет
const sasha = new Pensioner("Sasha", 72);
Pensioner.calculateRestAges(sasha); //Вы уже на пенсии
