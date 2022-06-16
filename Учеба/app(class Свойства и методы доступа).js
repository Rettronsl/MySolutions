//class Свойства и методы доступа
class Person {
    #ageValue = 1;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //сеттер, устанавливает значение параметра
    set age(value) {
        console.log(`Передано ${value}`);
        if (value > 0 && value < 110) this.#ageValue = value;
    }
    //геттер, возвращает значение
    get age() {
        return this.#ageValue;
    }
}

const tom = new Person("Tom", 37);
console.log(tom.age);   //37
tom.age = -15;  //значение не попадает в диапазон и не устанавливается
console.log(tom.age);   //37