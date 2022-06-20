//Строки. Проверка начала и конца строки

//StartsWith возвращает true, если строка начинается с определенной подстроки
const hello = "let me speak from my heart";
console.log(hello.startsWith("let"));   //true
console.log(hello.startsWith("Let"));   //false Регистр имеет значение!
console.log(hello.startsWith("lets"));  //false

//endsWith возвращает true, если строка оканчивается на определенную подстроку
console.log(hello.endsWith("heart"));   //true
console.log(hello.endsWith("bart"));    //false

//Дополнительный параметр позволяет указать индекс относительно которого будет идти сравнение
console.log(hello.startsWith("me", 4)); //true "me" - 4 индекс с начала строки
console.log(hello.startsWith("my", hello.length - 8));  //true "my" - 8 индекс с конца
