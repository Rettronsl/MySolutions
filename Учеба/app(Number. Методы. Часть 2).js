//Number. Методы часть 2

//isNan() - определяет является ли объект числом. true, если не число
var a = Number.isNaN(Number.isNaN); //true
var b = Number.isNaN(true); //false new Number(true) = 1
var c = Number.isNaN(null); //false new Number(false) = 0
var d = Number.isNaN(25);   //false
var e = Number.isNaN("54"); //false

//Для строк лучше использовать глобальную функцию isNaN
var f = Number.isNaN("hello world!");   //false
var f1 = isNaN("hello world!"); //true

//parseFloat() - преобразует строку в число с плавающей точкой
var a1 = Number.parseFloat("34.90");
console.log(a1) //34.9
var b1 = Number.parseFloat("hello");
console.log(b1);    //NaN
var c1 = Number.parseFloat("34hello");
console.log(c1);    //34

//parseInt() - преобразует строку в целое число
var a2 = Number.parseInt("34,90");
console.log(a2) //34
var b2 = Number.parseInt("hello");
console.log(b2);    //NaN
var c2 = Number.parseInt("66hello");
console.log(c2);    //66

//toFixed() - оставляет в числе с плавающей точкой определенное количество знаков в дробной части
var a3 = 10 / 1.44;
console.log("До метода toFixed(): " + a3);  //До метода toFixed(): 6.944444444444445
a3 = a3.toFixed(2); //оставляем 2 знака после запятой
console.log("После метода toFixed(): " + a3);   //После метода toFixed(): 6.94