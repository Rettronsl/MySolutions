//Error. Применение типов ошибок

//Можно использовать встроенные типы ошибок
class Person {
    constructor(name, age) {
        if (age < 0) throw new Error("Возраст должен быть положительным");
        this.name = name;
        this.age = age;
    }
    print() { console.log(`Name: ${this.name} Age: ${this.age}`); }
}

try {
    const tom = new Person("Tom", -45);
    tom.print();
}
catch (error) {
    console.log(error.message); //Возраст должен быть положительным
}

//генерация нескольких типов ошибок
class Person1 {
    constructor(pName, pAge) {
        const age = parseInt(pAge);
        if (isNaN(age)) throw new TypeError("Возраст должен представлять число");
        if (age < 0 || age > 120) throw new RangeError("Возраст должен быть больше 0 и меньше 120");
        this.name = pName;
        this.age = age;
    }
    print() { console.log(`Name: ${this.name} Age: ${this.age}`); }
}
//Проверим генерацию исключений
try {
    const tom1 = new Person1("Tom", -45);
}
catch (error) {
    console.log(error.message); //Возраст должен быть больше 0 и меньше 120
}

try {
    const bob = new Person1("Bob", "bla bla bla");
}
catch (error) {
    console.log(error.message); //Возраст должен представлять число
}
try {
    const sam = new Person1("Sam", 22);
    sam.print();    //Name: Sam Age: 22
}
catch (error) {
    console.log(error.message);
}