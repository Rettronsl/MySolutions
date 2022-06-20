//Строки. Удаление пробелов

//Удаление начальных и концевых пробелов
let hello = "     Привет Том     ";
const beforeLength = hello.length;
hello = hello.trim();
const afterLength = hello.length;
console.log("Длина строки до: ", beforeLength); //Длина строки до:  20
console.log("Длина строки после: ", afterLength);   //Длина строки после:  10

//Удаление пробела с начала строки
let hello1 = "     Привет Том     ";
hello1 = hello1.trimStart();
console.log(hello1, hello1.length); //Привет Том      15

//Удаление пробела с конца строки
let hello2 = "     Привет Том     ";
hello2 = hello2.trimEnd();
console.log(hello2, hello2.length); //     Привет Том 15

//Удаление пробела с левой части строки (метод устарел)
let hello3 = "     Привет Том     ";
hello3 = hello3.trimLeft();
console.log(hello3, hello3.length); //Привет Том      15

//Удаление пробела с правой части строки (метод устарел)
let hello4 = "     Привет Том     ";
hello4 = hello4.trimRight();
console.log(hello4, hello4.length); //     Привет Том 15