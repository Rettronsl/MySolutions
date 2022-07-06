//window.open параметры

//window.open(url, target, windowFeatures);
// url - путь к ресурсу
// target - как открывается: _self - страница откроется в текущей вкладке; _blank - страница откроется в новой вкладке или в отдельном окне
// windowFeatures - набор стилевых характеристик окна.
// popup - отдельное всплывающее окно. Значения могут быть: yes, 1 или true. Например, "popup=yes"
// width/innerWidth - ширина окна в пикселях, например width=640
// height/innerHeight - высота окна в пикселях, например height=480
//left/screenX - координата X относительно начала экрана в пикселях. Например, left=0
//top/screenY - координата Y относительно начала экрана в пикселях, Например, top=0

//Этот код вставить перед скриптом
//<button onclick="openWindow()">Нажми сюда</button>

// с помощью метода moveTo() можно переместить окно на новую позицию
// с помощью метода close можно закрыть окно через определенное время
function openWindow() {
    const popup = window.open("https://bitblaze.ru", "_blank", "width=400, height=400, left=5000, top=600");
    popup.moveTo(200, 200);
    setTimeout(() => popup.close(), 5000);
}

