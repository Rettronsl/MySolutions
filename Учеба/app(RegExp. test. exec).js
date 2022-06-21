//RegExp. test. exec.
//Определение
const myExp1 = /hello/;
const myExp2 = new RegExp("hello");

//test определяет соответствует ли регулярное выражение строке
const initialText = "hello world!";
const exp = /hello/;
const result = exp.test(initialText);
console.log(result);    //true. В исходном тексте есть hello

const initialText2 = "beautiful wheather";
const result2 = exp.test(initialText2);
console.log(result2);   //false. В тексте нет hello

/*exec проверяет соответствует ли строка регулярному выражению
Вовзвращает ту часть строки, которая соответствует выражению.*/
let result3 = exp.exec(initialText);
console.log(result3);   //['hello', index: 0, input: 'hello world!', groups: undefined]

let result4 = exp.exec(initialText2);
console.log(result4);   //null
