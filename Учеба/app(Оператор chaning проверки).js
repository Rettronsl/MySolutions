//Оператор ?.
//Проверка свойства. Объект определен, но не имеет свойства
let tom = { name: "Tom" };
let bob = {
    name: "Bob",
    company: {
        title: "Microsoft"
    }
};

console.log(tom.company?.title);    //undefined
console.log(bob.company?.title);    //Microsoft

//проверка свойства-массива
let tom1 = { name: "Tom" };
let bob1 = {
    name: "Bob",
    languages: ["javascript", "typescript"]
};

console.log(tom1.languages?.[0]);   //udefined
console.log(bob1.languages?.[0]);   //javascript

//проверка метода
let tom2 = { name: "Tom" };
let bob2 = {
    name: "Bob",
    say(words) {
        console.log(words);
    }
};

console.log(tom2.say?.("my name is Tom"));   // undefined
console.log(bob2.say?.("my name is Bob"));   // my name is Bob