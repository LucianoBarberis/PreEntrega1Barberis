const inventario = [];

function newArticle() {
    alert("A continuacion se le pediran algunos datos para crear su articulo")
    let nombre = prompt("Ingrese una descripcion para su articulo");
    let identificador = prompt("Ingrese un ID para su articulo");
    let cantidad = prompt("Ingrese el stock de su articulo");
    let precio = prompt("Indique el precio de su articulo");
    let total = cantidad * precio;
    let articulo = {
        Descripcion: nombre,
        Id: identificador,
        Stock: cantidad,
        Valor: precio,
    }
    alert(`Su articulo a sido creado correctamente\nDescripcion: ${nombre}\nID: ${identificador}\nStock: ${cantidad}\nValor: ${precio}\nTotal: ${total}`)
    inventario.push(articulo)
}
function showArticles() {
    if (inventario.length === 0) {
        alert("No existen articulos");
    } else {
        alert("Sus articulos se muestran en la consola");
        console.log(inventario);
    }
}
function deleteLastArticle() {
    if (inventario.length === 0){
        alert("No existen articulos para eliminar")
    }
    else {
        inventario.pop();
        alert("El ultimo articulo generado se a eliminado")
    }
}
function filtrarArticulos() {
    if (inventario.length === 0) {
        alert("No hay artículos para filtrar");
    } else {
        let criterio = prompt("Ingrese la descripción o ID del artículo a filtrar:");
        let resultados = inventario.filter(item => item.Descripcion.includes(criterio) || item.Id.includes(criterio));
        console.clear();
        console.log("Resultados de filtro:");
        resultados.forEach((item, index) => {
            console.log(`${index + 1}. Descripción: ${item.Descripcion}, ID: ${item.Id}, Stock: ${item.Stock}, Valor: ${item.Valor}, Total: ${item.Total}`);
        });
        alert("Los resultados del filtro se muestran en la consola");
    }
}
function buscarArticulo() {
    if (inventario.length === 0) {
        alert("No hay artículos para buscar");
    } else {
        let criterio = prompt("Ingrese la descripción o ID del artículo a buscar:");
        let resultado = inventario.find(item => item.Descripcion === criterio || item.Id === criterio);
        if (resultado) {
            console.clear();
            console.log("Artículo encontrado:");
            console.log(`Descripción: ${resultado.Descripcion}, ID: ${resultado.Id}, Stock: ${resultado.Stock}, Valor: ${resultado.Valor}, Total: ${resultado.Total}`);
            alert("El artículo encontrado se muestra en la consola");
        } else {
            alert("No se encontró ningún artículo con esa descripción o ID");
        }
    }
}

let entrada = prompt("Bienvenido a su inventario\n 1-Crear un nuevo articulo\n 2-Ver los articulos creados\n 3-Eliminar el ultimo articulo\n 4-Filtrar los articulos \n 5-Buscar un elemento en concreto \n escribir 'salir' para terminar");

while (entrada !== "salir") {
    const numeroEntrada = parseInt(entrada);
    if (numeroEntrada === 1) {
        newArticle();
    } else if (numeroEntrada === 2) {
        showArticles()
    } else if (numeroEntrada === 3) {
        deleteLastArticle()
    } else if (numeroEntrada === 4) {
        filtrarArticulos()
    } else if (numeroEntrada === 5) {
        buscarArticulo();
    } else {
        alert("Escriba un valor valido")
    }
    entrada = prompt("Bienvenido a su inventario\n 1-Crear un nuevo articulo\n 2-Ver los articulos creados\n 3-Eliminar el ultimo articulo\n 4-Filtrar los articulos \n 5-Buscar un elemento en concreto \n escribir 'salir' para terminar");
}


// El unico problema que tengo es que el los articulos se van a mostrar cuando se salga del bucle ya que la consola no anda antes de eso :/ 
// perdonenmela