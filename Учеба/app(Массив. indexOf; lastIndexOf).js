//Массивы. indexOf() lastIndexOf()

const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];

//indexOf возвращает индекс первого включения элемента в массиве.
const firstIndex = people.indexOf("Tom");

//lastIndexOf возвращает индекс последнего включения элемента в массиве.
const lastIndex = people.lastIndexOf("Tom");
const otherIndex = people.indexOf("Mike");

console.log(firstIndex);    //0
console.log(lastIndex); //3
console.log(otherIndex);    //-1
