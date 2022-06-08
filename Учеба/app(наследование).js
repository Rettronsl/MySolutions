//Наследование
// конструктор пользователя
function User(name, age) {
    this.name = name;
    this.age = age;
    this.go = function () { document.write(this.name + " идет <br>") };
    this.displayInfo = function () {
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
}
// добавляем свойство maxage
User.prototype.maxage = 110;

//конструктор работника
function Employee(name, age, comp) {
    User.call(this, name, age);
    this.company = comp;
    this.displayInfo = function () {
        document.write("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company + "<br/>");
    };
}
//прототип работника наследует прототип User
Employee.prototype = Object.create(User.prototype);

//создаем пользователя и работника
var tom = new User("Том", 26);
var bill = new Employee("Билл", 32, "Google");

//свойство go одинаково для обих(унаследовано)
tom.go();
bill.go();

//свойство displayInfo для каждого класса свое
tom.displayInfo();
bill.displayInfo();
//свойство прототипа User унаследовано классаом Employee
console.log(bill.maxage);