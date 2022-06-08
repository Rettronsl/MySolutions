//Ключевое слово this. Явная привязка
function foo() {
    console.log(this.bar);
}

var o3 = { bar: "bar3" }
var bar = "bar1";

foo();  //undefined для node и bar1 для браузера
foo.apply(o3);  //bar3
