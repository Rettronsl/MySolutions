//location. Расположение веб-страницы

//Свойства объекта location
// href - полная строка запроса к ресурсу
// pathname - путь к ресурсу
// origin - общая схема запроса
// protocol - протокол
// port - порт, используемый ресурсом
// host - хост
// hostname - название хоста
// hash - если строка содержит символ решетки(#), то данное свойство возвращает ту часть строки, которая идет после этого символа
// search - если строка содержит знак вопроса(?), то данное свойство возвращает ту часть строки, которая идет после знака вопроса
document.write("Строка запроса: " + location.href + "<br />");
document.write("Путь к ресурсу: " + location.pathname + "<br />");
document.write("Схема: " + location.origin + "<br />");
document.write("Протокол: " + location.protocol + "<br />");
document.write("Порт: " + location.port + "<br />");
document.write("Хост: " + location.host + "<br />");
document.write("Имя хоста: " + location.hostname + "<br />");
document.write("Хэш: " + location.hash + "<br />");
document.write("Поиск: " + location.search + "<br />");

//assign(url) - загружает ресурс, который находится по пути url
//reload(forceReload) - перезагружает текущую веб-страницу.
//replace(url) - заменяет текущую веб страницу другим ресурсом, который находится по пути url. В истории не сохраняется

//Перенаправление
location = "http://google.com";
//аналогично
//location.href = "http://google.com";
//location.assign("http://google.com");

//Переход на другой локальный ресурс
location.replace("index.html");