//объект передается в функцию в качестве параметра
function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function () {
            document.write("Имя: " + this.name + " возраст: " + this.age + "<br/>");
        },
        driveCar: function (car) {
            document.write(this.name + " ведет машину " + car.name + "<br/>");
        }
    };
};

function createCar(mName, mYear) {
    return {
        name: mName,
        year: mYear,
    };
};

var tom = createUser("Tom", 26);
tom.displayInfo();
var bently = createCar("Бентли", 2004);
tom.driveCar(bently);
