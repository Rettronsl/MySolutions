//navigator. geolocation

//позволяет получить географическое положение пользователя
//getCurrentPosition() имеет два параметра: функция срабатывающая при удачном запуске
//и функция срабатывающая при ошибке запроса геоданных

function success(positioin) {
    var latitude = positioin.coords.latitude;   //географическая широта
    var longitude = positioin.coords.longitude; //географическая долгота
    var altitude = positioin.coords.altitude;   //высота
    var speed = positioin.coords.speed; // скорость перемещения

    document.write("Широта: " + latitude + "<br/>");
    document.write("Долгота: " + longitude + "<br/>");
    document.write("Высота: " + altitude + "<br/>");
    document.write("Скорость: " + speed + "<br/>");
};

function error(obj) {
    document.write("Ошибка при определении местоположения");
};
navigator.geolocation.getCurrentPosition(success, error);
