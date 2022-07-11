//Таймеры. setInterval

// setInterval постоянно выполняет определенную функцию через промежуток времени
// обновляет элемент time на странице каждую секунду, создавая новый объект Date
function updateTime() {
    document.getElementById("time").innerHTML = new Date().toTimeString();
}
setInterval(updateTime, 1000);
