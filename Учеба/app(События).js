// События, подключаем модуль events
const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";

// обработчик события
emitter.on(eventName, function () {
    console.log("Hello all!");
});

//тоже обработчик события
emitter.on(eventName, function () {
    console.log("Привет!");
});

emitter.emit(eventName);