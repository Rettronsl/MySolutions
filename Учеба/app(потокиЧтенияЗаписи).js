// Потоки чтения и записи
// подключаем модуль для работы с файлами
const fs = require("fs");

//создаем файл и потоки записи
let writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир! \n");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");

//создаем файл и поток чтения
let readableStream = fs.createReadStream("hello.txt", "utf-8");

//запускаем поток чтения
readableStream.on("data", function (chunk) {
    console.log(chunk);
});
