//Массивы. Наследование методов
//создаем свой класс, который наследует свойства массива Array

class Team extends Array {
    constructor(name, ...members) {
        super(...members);
        this.name = name;
    }
    //определяем метод, который наследует метод push 
    push(person) {
        if (person !== "admin") super.push(person);
    }
}

//определяем новую команду
const snowbars = new Team("SnowBars", "Tom", "Sam", "Bob");

//попробуем добавить новый элемент admin
snowbars.push("admin");
console.log(snowbars);  //Team(3) ['Tom', 'Sam', 'Bob', name: 'SnowBars']

//попробуем добавить новый элемент Tim
snowbars.push("Tim");
console.log(snowbars);  //Team(4) ['Tom', 'Sam', 'Bob', 'Tim', name: 'SnowBars']

