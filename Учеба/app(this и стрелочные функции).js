//this и Стрелочные функции

/*
// некорректный код, this будет как undefined
const school = {
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function () {
        this.courses.forEach(function (course) {    //перебираем каждый элемент массива
            console.log(this.title, course);
        })
    }
}
school.printCourses();*/

//Решение. Передаем подобное значение this.title или весь контекст объекта
const school = {
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function () {
        const that = this;
        this.courses.forEach(function (course) {
            console.log(that.title, course);
        })
    }
}
school.printCourses();

//Решение со стрелочной функцией
const school1 = {
    title: "Oxford",
    courses: ["Javascript", "TypeScript", "Java", "Go"],
    printCourses: function () {
        this.courses.forEach((course) => console.log(this.title, course))
    }
}
school1.printCourses();