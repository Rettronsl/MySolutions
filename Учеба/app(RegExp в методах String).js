//RegExp в методах String 

//Split. Разделение строки
const initialText = "Сегодня была прекрасная погода";
const exp = /\s/;   //\s - одиночный символ пустого пространства
const result = initialText.split(exp);
result.forEach(value => console.log(value));    //каждое слово в отдельной строке

//Match. Поиск всех соответствий в строке
const initialText1 = "Он пришел домой и сделал домашнюю работу";
const exp1 = /дом[а-я]*/gi; //ищем слова(глобально, независимо от регистра), начинающиеся с дом с неопредленным количеством букв(*)
const result1 = initialText1.match(exp1);
result1.forEach(value => console.log(value));   //домой домашнюю

//Search. Поиск в строке, индекс первого включения
const initialText2 = "hello world";
const exp2 = /wor/;
const result2 = initialText2.search(exp2);
console.log(result2);   //6

//Replace. Замена всех соответствий регулярному выражению
let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин:салат, чай.";
const exp3 = /чай/gi //ищем слово чай(глобально, без учета регистра)
menu = menu.replace(exp3, "кофе");
console.log(menu);  //Завтрак: каша, кофе. Обед: суп, кофе. Ужин:салат, кофе.