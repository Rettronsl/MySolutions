//Расширение объектов. Prototype
// создаем конструктор User
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function () {
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
};

//добавляем метод hello и свойство maxAge через прототип
User.prototype.hello = function () {
    document.write(this.name + " говорит: 'Привет!'<br/>");
};
User.prototype.maxAge = 110;

var tom = new User("Том", 26);
tom.hello();
var john = new User("Джон", 28);
john.hello();
console.log(tom.maxAge);    //110
console.log(john.maxAge);   //110

//свойство объекта с таким же названием как и свойство прототипа имеет приоритет
tom.maxAge = 99;
console.log(tom.maxAge);    //99
console.log(john.maxAge);   //110