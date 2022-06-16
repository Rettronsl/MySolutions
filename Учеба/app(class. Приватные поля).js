//class Приватные поля
class Person {
    #name;
    #age = 1;
    constructor(name, age) {
        this.#name = name;
        this.setAge(age);
    }
    setAge(age) {
        if (age > 0 && age < 110) this.#age = age;
    }
    print() {
        console.log(`Name: ${this.#name} Age: ${this.#age}`);
    }
}

//создаем персону Том
const tom = new Person("Tom", 37);
tom.print();    //Name: Tom Age: 37
//Назначаем ему возраст 22 года
tom.setAge(22); //Name: Tom Age: 22
tom.print();
//Назначаем некорректный возраст (останется предыдущее значение)
tom.setAge(-1234);
tom.print();    //Name: Tom Age: 22 
