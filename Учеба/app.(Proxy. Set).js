//Proxy. set 
/*
//set перехватывает обращения к свойству при установке его значения
const handler = {
    set: function (target, property, value, receiver) {

    }
};

// target - оригинальный объект к которому идет проксирование
// property - название свойства к которому идет обращение
// value - устанавливаемое значение
// receiver - объект Proxy через который выполняется проксирование

// В примере сначала логгируем передаваемое значение, затем устанавливаем свойство
const target2 = { name: "Tom", age: 37 };
const handler2 = {
    set: function (target, prop, value) {
        console.log(value);
        target[prop] = value;
    }
};
const proxy = new Proxy(target2, handler2);
proxy.name = "Tomas";
console.log(proxy.name);
proxy.age = 22;
console.log(proxy.age);
*/
//В этом примере, в методе set проверяем корректность введенных данных
const target3 = { name: "Tom", age: 37 };
const handler3 = {
    set: function (target, prop, value) {
        if (prop === "age" && value < 1)
            console.log("Некорректный возраст");
        else return target[prop] = value;
    }
};
const proxy2 = new Proxy(target3, handler3);
proxy2.name = "Tomas";
console.log(proxy2.name);   //Tomas
proxy2.age = -199;  //  Некорректный возраст
console.log(proxy2.age);    //Возраст остался прежним 37
proxy2.age = 22;
console.log(proxy2.age);    //22