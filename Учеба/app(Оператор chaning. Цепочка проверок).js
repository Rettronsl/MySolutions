//Оператор ?.Цепочка проверок
let sam = { name: "Sam" };
let tom = {
    name: "Tom",
    company: { title: "Google" }
};
let bob = {
    name: "Bob",
    company: {
        title: "Microsoft",
        print() {
            console.log(`Компания ${this.title}`)
        }
    }
};

sam?.company?.print?.();    //не вызывается, нет свойства company
tom?.company?.print?.();    //не вызывается, нет метода print
bob?.company?.print?.();    //Компания Microsoft