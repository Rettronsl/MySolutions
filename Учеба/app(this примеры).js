//ключевое слово this
//контекст объекта
/*var o = {
    bar: "bar3",
    foo: function () {
        console.log(this.bar);  //ссылается на этот же объект
    }
}
var bar = "bar1";
o.foo();    //bar3*/

//Примеры

function foo() {
    var bar = "bar2";
    console.log(this.bar);
}

var o3 = { bar: "bar3", foo: foo };
var o4 = { bar: "bar4", foo: foo };

var bar = "bar1";

foo();  //undefined для node и bar1 для браузера
o3.foo();   //bar3
o4.foo();   //bar4
