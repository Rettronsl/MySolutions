//Ключевое слово this
//контекст функции
function foo() {
    var bar = "bar2";
    console.log(this.bar);
}
var bar = "bar1";
foo();  //при тестировании в браузере bar1; при тестировании в node undefined

//без this
function foo1() {
    var bar1 = "bar2";
    console.log(bar1);
}
var bar1 = "bar1";
foo1();  //при тестировании bar2

//при использовании строгого режима
"use strict"
function foo2() {
    var bar2 = "bar2";
    console.log(this.bar2)
}
var bar2 = "bar1";
foo2(); //при тестировании в браузере bar1; при тестировании в node undefined