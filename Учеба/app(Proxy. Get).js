//Proxy. get 

//get перехватывает обращения к свойству при получении его значения и возвращает некоторое значение
const handler = {
    get: function (target, prop, receiver) {
        return некоторое_значение;
    }
};

//target - сам проксированный объект. Можем обратиться к функциональности оригинального объекта
//prop - название свойства к которому идет обращение
//receiver - объект Proxy через который выполняется проксирование

const target = { name: "Tom" };
const handler1 = {
    get: function (target, prop, receiver) {
        return "Tomas Smith";
    }
};
const proxy = new Proxy(target, handler1);
console.log(proxy.name);    //Tomas Smith

//Вариант
const target2 = { name: "Bill" };
const handler2 = {
    get: function (target, prop) {
        return "Name: " + target2.name;
    }
};
const proxy2 = new Proxy(target2, handler2)
console.log(proxy2.name);   //Name: Bill

//Можно выяснить к какому именно свойству идет обращение и переопределить его
const target3 = { name: "Tom", age: 37 };
const handler3 = {
    get: function (target, prop) {
        if (prop === "name")
            return target3.name.toUpperCase();
        else return target3[prop];
    }
};
const proxy3 = new Proxy(target3, handler3);
console.log(proxy3.name);   //TOM
console.log(proxy3.age);    //37
