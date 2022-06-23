//Date. Получение даты и времени

// getDate() - возвращает день месяца
// getDay() - возвращает день недели (0 - воскресенье, 6 - суббота)
// getMonth() - возвращает номер месяца (0 - январь, 11 - декабрь)
// getFullYear() - возвращает год;
// toDateString() - возвращает полную дату в виде строки
// getHours() - возвращает час (от 0 до 23)
// getMinutes() - возвращает минуты(от 0 до 59)
// getSeconds() - возвращает секунды (от 0 до 59)
// getMilliSeconds() - возвращает миллисекунды(от 0 до 999)
// toTimeString() - возвращает полное время в виде строки

//Получим текущую дату
var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

var myDate = new Date();
var fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
document.write(fullDate);

//Получим текущее время
var welcome;
var myDate = new Date();
var hour = myDate.getHours();
var minute = myDate.getMinutes();
var second = myDate.getSeconds();
if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}
if (hour < 12) {
    welcome = "Доброе утро";
}
else if (hour < 17) {
    welcome = "Добрый день";
}
else {
    welcome = "Добрый вечер";
}
document.write(welcome + ", текущее время: " + hour + ":" + minute + ":" + second);