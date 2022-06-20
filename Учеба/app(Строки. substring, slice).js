//Строки. substring, slice
//методы для вырезания подстроки

const hello = "привет мир. пока мир";
// вырезаем с 7 по 10 индекс
const world = hello.substring(7, 10);
console.log(world); //мир

//вырезаем с 12 до конца строки
const world1 = hello.substring(12);
console.log(world1);    //пока мир

/*slice позволяет использовать отрицательные индексы,
они указывают на индекс относительно конца строки*/
const world2 = hello.slice(7, 10);
console.log(world2); //мир
const world3 = hello.slice(12);
console.log(world3);    //пока мир

// если первый индекс больше второго
const world4 = hello.slice(6, 0);   //в slice так не работает
console.log(world4);    //
const world5 = hello.substring(6, 0);    //в substring работает
console.log(world5);    //привет

//отрицательные индексы
const bye1 = hello.slice(-8, -4);   //в slice работает
console.log(bye1);  //пока
const bye2 = hello.substring(-8, -4);   //в substring так не работает
console.log(bye2);  //


