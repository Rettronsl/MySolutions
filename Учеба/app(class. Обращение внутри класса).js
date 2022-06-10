//class. Обращение внутри класса
class Person {
    name;
    age;
    print() {
        console.log(`Name:${this.name} Age:${this.age}`);   //this указывает на текущий объект
    }
}
//примеры
const tom = new Person();
tom.name = "Tom";
tom.age = 37;
tom.print();

const bob = new Person();
bob.name = "Bob";
bob.age = 41;
bob.print();