//конструкторы
//конструктор типа Car
function Car(mName, mYear) {
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function () {
        document.write("Модель: " + this.name + " Год выпуска: " + this.year + "<br/>");
    };
};

//конструктор типа User
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function (car) {
        document.write(this.name + " ведет машину " + car.name + "<br/>");
    };
    this.displayInfo = function () {
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
};

var tom = new User("Tom", 26);
tom.displayInfo();
var bently = new Car("Бентли", 2004);
tom.driveCar(bently);

