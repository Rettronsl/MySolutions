// Наследование от EventEmitter
//подключаем модуль util для наследования
const util = require("util");

//подключаем модуль events для обработки событий
const EventEmitter = require("events");

//объявляем функцию конструктор User
function User() {
}

// связываем User с EventEmitter
util.inherits(User, EventEmitter);

let eventName = "greet";
User.prototype.SayHi = function (data) {
    this.emit(eventName, data);
}

let user = new User();

//добавляем к объекту user обработку события "greet"
user.on(eventName, function (data) {
    console.log(data);
});

user.SayHi("Мне нужна твоя одежда ...");