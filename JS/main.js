// Funcion de Encendido de la consola mediante click del botón//

function iniciar() {
    var boton = document.getElementById('boton');
    boton.addEventListener('click', presionar, false);
}
function presionar() {
    var video = document.getElementById('video');
    video.style.display = "flex";

    video.play();
    var led_on = document.getElementById('led_on');
    led_on.classList.add("led_on")
    led_on.classList.remove("led")
}
window.addEventListener('load', iniciar, false);

// Funcion de apagado de la consola una vez finaliza el video de inicio //

document.getElementById('video').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        var led_on = document.getElementById('led_on');
        var video = document.getElementById('video');
        video.style.display = "none";
        led_on.classList.add("led")
        led_on.classList.remove("led_on")
    }