//Массивы. every()
//Метод проверяет все ли элементы соответствуют условию
const numbers = [1, -12, 8, -4, 25, 42];
const passed = numbers.every(n => n > 0);
console.log(passed);    //false
