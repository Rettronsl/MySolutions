//канал Pipe
const fs = require("fs");

//создаем поток чтения из файла hello.txt
let readableStream = fs.createReadStream("hello.txt", "utf-8");

//создаем поток записи в файл some.txt
let writebleSteam = fs.createWriteStream("some.txt");

readableStream.pipe(writebleSteam);