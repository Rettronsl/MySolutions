//Группы в регулярных выражениях

//необходимо найти путь к изображению
let initialText = '<img src= "picture.png" />';
let exp = /[a-z]+\.(png|jpg)/i; //в названии могут содержаться буквы от a до z( 1 и более символов) и расширение png или jpg
let result = initialText.match(exp);
result.forEach(function (value, index, array) {
    console.log(value); //picture.png png
})

//Получение значений групп
const exp1 = /(\d{4})-(\d{2})-(\d{2})/;
const result1 = exp1.exec("2022-06-22");    //результатом будет массив

console.log(result1[0]);    //2022-06-22
console.log(result1[1]);    //2022
console.log(result1[2]);    //06
console.log(result1[3]);    //22
//Можно записать дату в новом формате
console.log(`${result1[3]}.${result1[2]}.${result1[1]}`);   //22.06.2022

//Именованные группы
//(?<название_группы>...) каждой группе можно присвоить свое имя
const exp2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;   //флаг "u" понимает выражения внутри регулярного выражения. 
const result3 = exp2.exec("2022-06-22");
console.log(result3.groups);    //{year: '2022', month: '06', day: '22'}
console.log(result3.groups.year);   //2022
console.log(result3.groups.month);  //06
console.log(result3.groups.day);    //22

//Утверждения.
/*Утверждения или assertiobs позволяют получить подстроку, которая соответствует регулярному выражению
и которая предваряется или не предваряется определенным выражением*/