//Date. Установка даты и времени.

//Дополнительные методы Date
// setDate() - установка дня в дате
// setMonth() - установка месяца (0 - январь, 11 - декабрь)
// setFullYear() - установка года
// setHours() - установка часа
// setMinutes() - установка минут
// setSeconds() - установка секунд
// setMilliseconds() - установка миллисекунд

// Установим дату
var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четвег", "Пятница", "Суббота"];
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

var myDate = new Date();
myDate.setDate(23);
myDate.setMonth(6);
myDate.setYear(2022);

var fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
document.write(fullDate);
