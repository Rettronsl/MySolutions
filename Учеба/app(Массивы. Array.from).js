//Массивы. Array.from

//объект представлен в виде набора элементов
const array = Array.from("Hello");
console.log(array); //['H', 'e', 'l', 'l', 'o']

/*в качестве второго параметра можно передать функцию, которая через первый параметр 
получает текущий элемент набора и возвращает результат трансформации*/
const numbers = [1, 2, 3, 4];
const array1 = Array.from(numbers, n => n * n); //лямбда-выражение запускается для каждого параметра
console.log(array1);   //[1, 4, 9, 16]

/*В качестве второго параметра принимается функция преобразования, в которую кроме набора
передается и индекс этого элемента*/
const array2 = Array.from({ length: 3 }, (element, index) => {
    console.log(element);   //undefined
    return index;
});
console.log(array2);    //[0, 1, 2]