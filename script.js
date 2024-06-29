function test(pregunta, respuesta, quiz) {
    if (pregunta === respuesta) {
        alert("✅Respuesta Correcta!✅")
        puntajeFinal++
    }else {
        alert("❌Respuesta Incorrecta❌")
        alert("🟡Te doy otra oportunidad🟡")
        let nuevaRespuesta = prompt(quiz)
        if (nuevaRespuesta === respuesta) {
            alert("✅Respuesta Correcta!✅")
        }else {
            alert("❌Respuesta Incorrecta❌")
        }
    }
}

let quiz1 = "¿Qué es HTML?\na) Un lenguaje de programación.\nb)Un lenguaje de marcado.\nc)Un editor de texto.";
let quiz2 = "¿Cual es la estructura basica de un HTML\na) <html><body><head></head></body></html>\nb) <html><title></title><body></body></html>\nc) <!DOCTYPE html><html><head></head><body></body></html>";
let quiz3 = "¿Qué etiqueta se usa para crear un enlace en HTML?\na) <link>\nb) <a>\nc) <href>";
let quiz4 = "¿Qué es CSS?\na) Un lenguaje de programación.\nb) Un lenguaje de marcado.\nc) Un lenguaje de hojas de estilo.";
let quiz5 = "¿Cómo se aplica un estilo CSS a un elemento HTML?\na) <p css=color: red;>Texto en rojo</p>\nb) <p style=color: red;>Texto en rojo</p>\nc) <p red=true>Texto en rojo</p>";
let quiz6 = "¿Qué es un selector en CSS?\na) Una regla para aplicar estilos a elementos específicos.\nb) Una etiqueta HTML.\nc) Una biblioteca JavaScript.";
let repeat
let puntajeFinal = 0;

while (repeat !== "no") {
    let pregunta1 = prompt(quiz1).toLocaleLowerCase();
    test(pregunta1, "b", quiz1);
    let pregunta2 = prompt(quiz2).toLocaleLowerCase();
    test(pregunta2, "c", quiz2);
    let pregunta3 = prompt(quiz3).toLocaleLowerCase();
    test(pregunta3, "b", quiz3);
    let pregunta4 = prompt(quiz4).toLocaleLowerCase();
    test(pregunta4, "c", quiz4);
    let pregunta5 = prompt(quiz5).toLocaleLowerCase();
    test(pregunta5, "b", quiz5);
    let pregunta6 = prompt(quiz6).toLocaleLowerCase();
    test(pregunta6, "a", quiz6);
    if (puntajeFinal === 6) {
        alert(`🙌😁Quiz finalizado, Su puntaje fue de ${puntajeFinal}/6😁🙌`)
    }else if (puntajeFinal === 5 || puntajeFinal === 4) {
        alert(`🙌😁Quiz finalizado, Su puntaje fue de ${puntajeFinal}/6😁🙌\nObtuviste un puntaje casi perfecto`)
    }else {
        alert(`🙌😁Quiz finalizado, Su puntaje fue de ${puntajeFinal}/6😁🙌\nPuedes esforzarte mas!`)
    }
    repeat = prompt("¿Deseas volver a realizar el test (si/no)?").toLocaleLowerCase();
}


