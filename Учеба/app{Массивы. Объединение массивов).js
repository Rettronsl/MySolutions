//Массивы. Объединение массивов
const men = ["Tom", "Sam", "Bob"];
const women = ["Kate", "Alice", "Mary"];

//объединяем массивы в один с добавлением нового значения
const people = [...men, "Alex", ...women];

console.log(people);    //['Tom', 'Sam', 'Bob', 'Alex', 'Kate', 'Alice', 'Mary']
