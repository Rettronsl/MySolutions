//Таймеры. requestAnimationFrame

//метод работает аналогично setInterval кроме того, что он заточен под работу с анимацией и графикой.
/* В метод window.requestAnimationFrame() передается функция, которое будет вызываться 60 раз в секунду
rotate изменяет угол поворота блока на странице.
window.requestAnimationFrame() возвращает уникальный id, который может использоваться для остановки анимации 
window.cancelAnimationFrame(id)*/

var square = document.getElementById("rect");
var angle = 0;
function rotate() {
    angle = (angle + 2) % 360;
    square.style.transform = "rotate(" + angle + "deg)";
    window.requestAnimationFrame(rotate);
}
var id = window.requestAnimationFrame(rotate);
