//Массивы. Наследование
//создаем свой класс, который наследует свойства массива Array
class Team extends Array {
    constructor(name, ...members) {
        super(...members);  //наследуем участников команды
        this.name = name;
    }
}

//создаем объект команды
const barcelona = new Team("Barcelona", "Tom", "Sam", "Bob");
console.log(barcelona); //Team(3) ['Tom', 'Sam', 'Bob', name: 'Barcelona']

//перебор набора
for (const person of barcelona) {
    console.log(person);
}

//добавляем один элемент в конец массива
barcelona.push("Tim");
console.log(barcelona); //Team(4) ['Tom', 'Sam', 'Bob', 'Tim', name: 'Barcelona']

//Удалим второй элемент
barcelona.splice(1, 1);
console.log(barcelona); //Team(3) ['Tom', 'Bob', 'Tim', name: 'Barcelona']