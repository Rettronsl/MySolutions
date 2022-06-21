//RegExp. Группы символов
//если нужно найти одну из нескольких букв
let initialText = "обороноспособность";
let exp = /[абв]/;
let result = exp.test(initialText);
console.log(result);    //true. одна из букв есть в тексте

initialText = "город";
result = exp.test(initialText);
console.log(result);    //false. искомых букв нет

//можно задать диапазон буквенных символов
exp = /[а-я]/;
result = exp.test(initialText);
console.log(result);    //true

initialText = "3di0789";
result = exp.test(initialText);
console.log(result);    //false

//если НЕ надо, чтобы строка имела определенные символы, ставится знак ^
let initialText2 = "обороноспособность";
exp = /[^а-я]/;
result = exp.test(initialText2);
console.log(result);    //false. Искомых букв нет

initialText2 = "3di0789";
exp = /[^0-9]/;
result = exp.test(initialText2);
console.log(result);    //true. Кроме цифр есть и буквы.

//При необходимости можно собирать комбинации выражений
const initialText3 = "дома";
const exp1 = /[дт]о[нм]/; //поиск комбинаций "дон","тон","дон","дом"
result = exp1.test(initialText3);
console.log(result);    //true. хотя бы одна из искомых комбинаций есть