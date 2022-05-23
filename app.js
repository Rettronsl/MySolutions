//подключаем модуль http
const http = require("http");

//приветственное сообщение
let message = "Hello, server!";

//создаем сервер
http.createServer(function (request, response) {

    //console.log(message);

    setTimeout(function () {
        console.log(message);
    }, 1600);
    setTimeout(function () {
        console.log(message);
    }, 3200);
    setTimeout(function () {
        console.log(message);
    }, 4800);

    response.end(message);
}).listen(3000, "127.0.0.1",);