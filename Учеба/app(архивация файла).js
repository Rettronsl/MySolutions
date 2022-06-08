//архивация файла
//подключаем модули
const fs = require("fs");
const zlib = require("zlib");

//создаем поток чтения
let readableStream = fs.createReadStream("hello.txt", "utf-8");

//создаем поток записи
let writeableStream = fs.createWriteStream("hello.txt.gz");

//создаем архивацию
let gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writeableStream);