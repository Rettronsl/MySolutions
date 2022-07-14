//свойство style

// Установим цвет шрифта
var root = document.documentElement;
// Устанавливаем стиль
root.style.color = "blue";
//Получаем значение стиля
document.write(root.style.color);   //blue

//Можно установить цвет с помощью css
html{
    color: blue;
}

//Для свойств с дефисом (font-family) пишется так
var root1 = document.documentElement;
root1.style.fontFamily = "Verdana";

//свойство classList
//Это объект, реализующий следующие методы:
// add(className) - добавляет класс className
// remove(className) - удаляет класс className
// toggle(className) - переключает у элемента класс на className. Если класса нет, то он добавляется, если есть, то удаляется
var articleDiv = document.querySelector("div.article");
//удаляем класс
articleDiv.classList.remove("article");
//добавляем класс
articleDiv.classList.add("blueStyle");
//переключаем класс
articleDiv.classList.toggle("article");
