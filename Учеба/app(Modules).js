// 2 урок

//подключаем модули
const os = require("os");
const greeting = require("./greeting");

//получим имя текущего пользователя
let userName = os.userInfo().username;

//выводим информацию
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));