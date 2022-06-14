//class. Свойства без обращения к полям (вычисляемые)
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //геттер выдает отдельно имя, отдельно фамилию
    get fullName() { return `${this.firstName} ${this.lastName}` }
    //сеттер разделяет полученное значение на две строки
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

const tom = new Person("Tom", "Smith");
//вызовем геттер
console.log(tom.fullName);  //Tom Smith
//присвоим новое имя
tom.fullName = "Tomas Jefferson";
console.log(tom.lastName);
