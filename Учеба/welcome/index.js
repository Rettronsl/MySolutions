const morning = require("./morning");
const evening = require("./evening");

//определяем объект, имеющий две функции вывода
module.exports = {
    getMorningMessage: function () { console.log(morning); },
    getEveningMessage: function () { console.log(evening); }
}