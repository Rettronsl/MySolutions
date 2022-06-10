//Деструктуризация. rest-оператор или оператор ...
const tom = {
    name: "Tom",
    age: 24,
    phone: "+369584841",
    email: "tom@gmail.com"
};
//деструктуризация
const { name, age, ...contacts } = tom;
console.log(name);  //Tom
console.log(age);   //24
console.log(contacts); // {phone: "+369584841", email: "tom@gmail.com" }

