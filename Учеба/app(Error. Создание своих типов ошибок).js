//Error. Создание своих типов ошибок

//При необходимости можно создать свой тип ошибок
class PersonError extends Error {
    constructor(value, ...params) {
        //остальные параметры передаем в конструктор базового класса
        super(...params)
        this.name = "PersonError"
        this.argument = value;
    }
}

class Person {
    constructor(pName, pAge) {
        const age = parseInt(pAge);
        if (isNaN(age)) throw new PersonError(pAge, "Возраст должен представлять число");
        if (age < 0 || age > 120) throw new PersonError(pAge, "Возраст должен быть больше 0 и меньше 120");
        this.name = pName;
        this.age = age;
    }
    print() { console.log(`Name: ${this.name} Age: ${this.age}`); }
}
try {
    const bob = new Person("Bob", "bla bla bla");
}
catch (error) {
    if (error instanceof PersonError) {
        console.log("Ошибка типа Person. Некорректное значение:", error.argument);  //Ошибка типа Person. Некорректное значение: bla bla bla
    }
    console.log(error.message); //Возраст должен представлять число
}
