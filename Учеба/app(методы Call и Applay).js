// методы call и apply

//объявляем конструктор User
function User(name, age) {
    this.name = name;
    this.age = age;
}

//инициализируем переменную tom
var tom = new User("Том", 26);

//объявляем функцию
function display() {
    console.log("Ваше имя: " + this.name);
}

//метод call вызывает функцию с указанным значением
display.call(tom);  //Ваше имя Том

//метод apply вызывает функцию, в качестве первого параметра получает объект для которого функция вызывается
//В качестве второго параметра передается массив аргументов
function add(x, y) {
    return x + y;
}

var result = add.apply(null, [3, 8]);

console.log(result);    //11