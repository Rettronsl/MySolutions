// подключаем модуль http
const http = require("http");

let message = "Дима, лох!";

//создаем сервер
http.createServer(function (request, response) {

    response.end(message);

}).listen(3000, "127.0.0.1", () => {
    console.log("Сервер начал проcлушивание запроcов");
});