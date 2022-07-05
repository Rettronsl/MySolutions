//Конструкция try..catch..finally

//Пример использования. Блок нужен для обработки возможных ошибок
try {
    callSomeFunc();
    console.log("Конец блока try");
}
catch {
    console.log("Возникла ошибка!");
}
console.log("Остальные инструкции");
// Возникла ошибка!
// Остальные инструкции

//Пример, когда catch не срабатывает (в блоке try все хорошо)
function callSomeFunc1() { console.log("Функция callSomeFunc1"); }
try {
    callSomeFunc1();    //Функция callSomeFunc1
    console.log("Конец блока try"); //Конец блока try
}
catch (error) {
    console.log("Возникла ошибка!");
}
console.log("Остальные инструкции");    //Остальные инструкции

//В качестве параметра в блок catch передается объект с информацией об ошибке
try {
    callSomeFunc();
    console.log("Конец блока try");
}
catch (error) {
    console.log("Возникла ошибка!");    //Возникла ошибка!
    console.log(error); //ReferenceError: callSomeFunc is not defined
}

//finally. Этот блок можно использовать вместе с блоком catch или вместо него.
try {
    callSomeFunc();
    console.log("Конец блока try");
}
catch {
    console.log("Произошла ошибка");    //Произошла ошибка
}
finally {
    console.log("Блок finally") //Блок finally
}
console.log("Остальные инструкции");    //