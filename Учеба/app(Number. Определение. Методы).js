//Number. Определение. Методы

//Определение
var x = new Number(34);
var y = new Number("34");
var z = 34;

//Методы Number
//Number.MAX_VALUE - наибольшее возможное целое число. Примерно 1.79Е+308
//Number.MIN_VALUE - наименьшее возможное положительное число. Примерно 5е-324 (около нуля)
//Number.NaN - специальное значение, показывающее что объект не является числом.
//Number.NEGATIVE_INFINITY - значение, обозначающее отрицательную неопределенность, возникает при переполнении в отрицательную сторону
var x1 = -1 * Number.MAX_VALUE;
var y1 = -1 * Number.MAX_VALUE;
var z1 = x1 + y1;
if (z1 === Number.NEGATIVE_INFINITY)
    document.write("Отрицательная неопределенность" + "</br >");    //учитываем, что речь о веб-странице
else
    document.write(z1);

//Number.POSITIVE_INFINITY - значение, обозначающее положительную неопределенность, возникает при переполнении в положительную сторону
var x2 = Number.MAX_VALUE;
var y2 = Number.MAX_VALUE;
var z2 = x2 * y2;
if (z2 === Number.POSITIVE_INFINITY)
    document.write("Положительная неопределенность");
else
    document.write(z2);