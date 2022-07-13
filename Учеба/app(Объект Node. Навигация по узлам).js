// Объект Node. Навигация по узлам
// nextSibling - обращаемся к следующему узлу
// previousSibling - обращаемся к предыдущему узлу

var articleDiv = document.querySelector("div.article");

// получаем первый дочерний элемент
var node = articleDiv.firstChild;
console.log(node.nodeName);
// Обращаемся к следующему узлу, пока он определен
while ((node = node.nextSibling) !== null) {
    console.log(node.nodeName);
}

//В этом варианте сначала получаем последний узел, а затем обращаемся а предыдущему сестринскому узлу
var articleDiv1 = document.querySelector("div.article");

//получаем последний дочерний элемент
var node1 = articleDiv1.lastChild;
console.log(node1.nodeName)
// Обращаемся к предыдущему узлу, пока он определен
while ((node1 = node1.previousSibling) !== null) {
    console.log(node1.nodeName);
}