//функция возвращает объект
function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function () {
            document.write("Имя: " + this.name + " Возраст: " + this.age + "<br/>");
        }
    };
};
var tom = createUser("Tom", 26);
tom.displayInfo();
var alice = createUser("Alice", 24);
alice.displayInfo();
