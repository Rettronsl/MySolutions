//navigator. userAgent

//свойство userAgent - представляет браузер пользователя.
document.write(navigator.userAgent);

//пример как из общей информации выделить бразуер
var browser, uAgent = navigator.userAgent;

if (uAgent.indexOf("Chrome") > -1) {
    browser = "Google Chrome";
} else if (uAgent.indexOf("Safari") > -1) {
    browser = "Apple Safari";
} else if (uAgent.indexOf("Opera") > -1) {
    browser = "Opera";
} else if (uAgent.indexOf("Firefox") > -1) {
    browser = "Mozilla Firefox";
} else if (uAgent.indexOf("MSIE") > -1) {
    browser = "Microsoft Internet Explorer";
}
else if (uAgent.indexOf("YaBrowser") > -1) {
    browser = "Yandex browser. Сочувствую"
}
document.write("Твой браузер: " + browser);

