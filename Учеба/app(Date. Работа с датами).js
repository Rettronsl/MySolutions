//Date. Работа с датами

//1 споособ. Создание объекта Date
var currentDate = new Date();
document.write(currentDate);

//2 способ. Можно передать в конструктор Date количество миллисекунд, которые прошли с начала эпохи Unix (1 января 1970)
var myDate = new Date(1659270000000)
document.write(myDate);

//3 способ. Передача в конструктор Date дня, месяца и года
var myDate1 = new Date("23 June 2022");
document.write(myDate1);

/*4 способ. Передача в конструктор Date всех параметров даты и времени.
Параметры(год, месяц, число, час, минуты, секунды, миллисекунды)*/
var myDate2 = new Date(2022, 06, 23, 13, 25, 15, 10);
document.write(myDate2);

