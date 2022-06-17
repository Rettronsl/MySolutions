//Массивы. filter()
//Принимает функцию условия. Возвращает массив элементов, соответствующих условию
const numbers = [1, -12, 8, -4, 25, 42];
const filteredNumbers = numbers.filter(n => n > 0);
console.log(filteredNumbers);   //[1, 8, 25, 42]
