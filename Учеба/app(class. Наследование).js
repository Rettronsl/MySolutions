//class. Наследование
class Person {   //базовый или родительский класс
    name;
    age;
    print() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}
//после названия класса-наследник ставится слово extends
class Employee extends Person {  //производный или класс-наследник
    company;
    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
}

//создаем Тома
const tom = new Person();
tom.name = "Tom";
tom.age = 34;

//создаем Боба
const bob = new Employee();
bob.name = "Bob";
bob.age = 36;
bob.company = "Google";

tom.print();    //Name: Tom Age: 34
bob.print();    //Name: Bob Age: 36
bob.work(); //Bob works in Google



