//class. Поведение и методы
class Person {
    name;
    age;
    move(place) {
        console.log(`Go to ${place}`);
    }
    eat() {
        console.log("Eat apples");
    }
}
const tom = new Person();
tom.move("Hospital");
tom.move("Cinema");
tom.eat();