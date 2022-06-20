//Строки. includes
//Возвращает true, если строка содержит определенную подстроку

const hello = "привет мир! пока мир!";
console.log(hello.includes("мир")); //true
console.log(hello.includes("май")); //false

//с помощью второго параметра можно определить индекс с которого будет начинаться поиск
console.log(hello.includes("мир", 5));  //true
console.log(hello.includes("привет", 6));   //false
