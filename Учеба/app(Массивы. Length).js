//Массивы. length

const fruit = [];
fruit[0] = "яблоки";
fruit[1] = "груши";
fruit[2] = "сливы";

console.log("В массиве fruit ", fruit.length, " элемента"); //В массиве fruit  3  элемента
for (let i = 0; i < fruit.length; ++i)
    console.log(fruit[i]);  //яблоки, груши, сливы

//Длиной массива будет индекс последнего элемента с добавлением единицы
const users = [];
users[0] = "Tom";
users[1] = "Kate";
users[4] = "Sam";
for (let i = 0; i < users.length; ++i)
    console.log(users[i]);
//Tom
//Kate
//undefined
//undefined
//Sam
//Несмотря на то, что для индексов 2 и 3 не добавили элементов, но длиной массива будет число 5