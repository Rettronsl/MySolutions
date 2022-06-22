//RegExp. Флаги выражений
//g - global. Позволяет найти все подстроки, соответтсвующие регулряному выражению.
//i - ignorCase. Позволяет найти подстроки, соответствующие регулярному выражению, вне зависимости от регистра.
//m - multiline. Позволяет найти подстроки, соответствующие регулярному выражению, в многострочном тексте.
//s - dotAll. Позволяет сопоставить точку в регулярном выражении с любым символом текста

//Регистр символов
const initialText = "привет Мир";
let exp = /мир/;
let result = exp.test(initialText);
console.log(result);    //false, отличия в регистре букв

exp = /мир/i
result = exp.test(initialText);
console.log(result);    //true, флаг i помогает

//Сопоставление точки
const text = "hello\nworld";
let exp1 = /hello.world/
let result1 = exp.test(text);
console.log(result1);   //false

exp1 = /hello.world/s;
result1 = exp1.test(text);
console.log(result1);   //true