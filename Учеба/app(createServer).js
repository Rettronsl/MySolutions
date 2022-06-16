//1 урок
const http = require("http");
http.createServer(function (request, response) {

    response.end("Hello");

}).listen(3000, "192.168.83.125", function () {

    console.log("Сервер начал прослушивание на порту 3000");
});