// Función de encendido de vídeo y LED al pulsar el botón//

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

// Funcion de apagado de LED al acabar el vídeo //

document.getElementById('video').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        var led_on = document.getElementById('led_on');
        var video = document.getElementById('video');
        video.style.display = "none";
        led_on.classList.add("led")
        led_on.classList.remove("led_on")
    }