//Строки. Объединение. Замена, Разделение.

//concat. Объединение строк
let hello = "Привет ";
let world = "мир";
hello = hello.concat(world);
console.log(hello); //Привет мир

//replace. Заменяет первое вхождение
let hello1 = "Добрый день";
hello1 = hello1.replace("день", "вечер");
console.log(hello1);    //Добрый вечер

//replaceAll. Заменяет все вхождения
let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай";
menu = menu.replaceAll("чай", "кофе");
console.log(menu);  //Завтрак: каша, кофе. Обед: суп, кофе. Ужин: салат, кофе

//split. Разделение строки на массив подстрок
const message = "Сегодня была прекрасная погода";
const messageParts = message.split(" ");    //количество пробелов влияет на разделение
console.log(messageParts);  //['Сегодня', 'была', 'прекрасная', 'погода']
