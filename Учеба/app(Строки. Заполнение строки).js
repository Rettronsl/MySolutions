//Строки. Заполнение строки

//методы padStart и padEnd растягивают строку на определенное количество символов и заполняют её пробелами
let hello = "hello".padStart(8);
console.log(hello); //   hello
hello = "hello".padEnd(8);
console.log(hello); //hello   

//В качестве второго параметра можно использовать значение, которым надо заполнить строку
let hello1 = "hello".padStart(17, "Javascript, ");
console.log(hello1);    //Javascript, hello
hello1 = "hello".padEnd(12, " Eugene");
console.log(hello1);    //hello Eugene

//если добавляемых символов больше добавляемой строки, то строка повторяется
let hello2 = "123".padStart(6, "0");
console.log(hello2);    //000123
hello2 = "123".padEnd(6, "0");
console.log(hello2);    //123000
