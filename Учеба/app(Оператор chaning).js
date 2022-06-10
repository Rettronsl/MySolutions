//Оператор ?.
//проверяем наличие свойств у объекта
let tom = null;
let bob = { name: "Bob" };

function printName(person) {
    console.log(person?.name);
}

printName(tom); //undefined т.к. свойства name нет
printName(bob); //Bob

//проверяем наличие не только свойств, но и методов в объекте.
let ton = undefined;
let bab = {
    name: "Bab",
    sayHi() {
        console.log(`Hi! I am ${this.name}`);
    }
};

console.log(ton?.name); //undefined
console.log(bab?.name); //Bab
ton?.sayHi();   //не выполняется, нет метода
bab?.sayHi();   //Hi! I am Bab