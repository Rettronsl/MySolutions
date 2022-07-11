//Таймеры. setTimeout. clearTimeout

//setTimeout. Разовое выполнение действий, через промежуток времени
//выполняемая функция и время в миллисекундах

function timerFunction() {
    document.write("выполнение функции setTimeout");
}
setTimeout(timerFunction, 1000);


//clearTimeout - функция для остановки таймера.
var timerId = setTimeout(timerFunction, 1000);
clearTimeout(timerId);


