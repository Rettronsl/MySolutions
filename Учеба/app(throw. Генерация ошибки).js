//throw. Генерация ошибок

class Person {
    constructor(name, age) {
        if (age < 0) throw "Возраст должен быть положительным";
        this.name = name;
        this.age = age;
    }
    print() { console.log(`Name: ${this.name} Age: ${this.age}`); }
}
/*const tom = new Person("Tom", -123);
tom.print();    //Uncaught Error Возраст должен быть положительным
const bob = new Person("Bob", 17);
bob.print();    //до сюда программа не дойдет, вылетит на ошибке
*/
//Обработка возможной ошибки
try {
    const tom1 = new Person("Tom", -123);
    tom1.print();
}
catch (error) {
    console.log("Произошла ошибка");    //Произошла ошибка
    console.log(error); //Возраст должен быть положительным (взято из текста ошибки)
}