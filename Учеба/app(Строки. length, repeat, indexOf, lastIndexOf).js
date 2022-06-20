//Строки. length, repeat, indexOf, lastIndexOf

//Варианты объявления
const name = "Tom";
const name1 = new String("Tom");

//length - длина строки
const hello = "Привет мир";
console.log(`В строке "${hello}" ${hello.length} символов`);    //В строке "Привет мир" 10 символов

//repeat - повторение строки
const hello1 = "hello ";
console.log(hello1.repeat(3));  //hello hello hello 

//indexOf - поиск индекса первого вхождения определенной подстроки
//lastIndexOf - поиск индекса последнего вхождения определенной подстроки
const hello2 = "привет мир. пока мир";
const key = "мир";
const firstPos = hello2.indexOf(key);
const lastPos = hello2.lastIndexOf(key);
console.log("Первое вхождение: ", firstPos);    //Первое вхождение:  7
console.log("Последнее вхождение: ", lastPos);  //Последнее вхождение:  17
