console.log("He cargado el fichero bucles.js");

function añadirGatoFooter() {
    let gatito = document.createElement("img");
    gatito.style.width = "50px";
    gatito.src = "./img/logo.webp";
    let footer = document.querySelector(".footer");
    footer.appendChild(gatito);
}

// for (let i = 0; i < numGatos; i++) {
//     console.log("He entrado en el bucle!");
//     footer.appendChild(gatito);
// }

// https://lenguajejs.com/javascript/dom/crear-elementos-dom/

// Voy a añadir un <p> al final del body
// let despedida = document.createElement("p");
// despedida.textContent = "¡Gracias por visitar nuestra Web!";
// despedida.style.color = "brown";

// let header = document.querySelector("header");
// header.appendChild(despedida);

// Voy a crear numGatos imagénes; y las voy añadir como hijos del footer
// let gatito = document.createElement("img");
// gatito.style.width = "50px";
// gatito.src = "./img/logo.webp";

// let footer = document.querySelector(".footer");

// // Cómo haríamos un for para ejecutar este código tantas veces como numGatos
// console.log("numGatos: ", numGatos);
// for (let i = 0; i < numGatos; i++) {
//     console.log("He entrado en el bucle!");

//     gatito = document.createElement("img");
//     gatito.style.width = "50px";
//     gatito.src = "./img/logo.webp";

//     footer.appendChild(gatito);
// }



// Ejercicios Bucle y condicionales

// Ejercicio1: Si el número de gatos es 0; cambiar el texto por “No hay gatos por adoptar, felicidades!”


// Ejercicio2: Fíjate que ahora en el código hay 3 variables boleanas. Muestra cada uno de los botones de “Contactar”, solo en función de si cada una de las chicas está disponible. Es decir, en esta configuración, el botón de "Verónica" debería desaparecer. Pista: piensa que propiedad de .style tienes que modificar para ocultar, mediante CSS, el botón de la chica correspoiente.

let patriciaDisponible = true;
let veronicaDisponible = false;
let edurneDisponible = true;


function cambiarColorBody(color) {
    let colorRojo = document.querySelector("body");
    colorRojo.style.backgroundColor = color;
}
cambiarColorBody("red");


function cambiarLema(lema) {
    document.querySelector(".hero p").textContent = lema;
}

cambiarLema("Cat lives matter");
cambiarLema("You are purrfect!");

function añadirGatos(numeroDeGatos) {
    for (let i = 0; i < numeroDeGatos; i++) {
        console.log("número de gatos", numeroDeGatos);
        añadirGatoFooter();
    }
}
añadirGatos(2);

function saludoCompleto(nombre, apellido, franjaHoraria) {
    if (franjaHoraria == "tarde") {
        console.log(`Buenas tardes${nombre}${apellido} `)
    }
    else if (franjaHoraria == "mañana") {
        console.log(`Buenos días ${nombre}${apellido}`);
    }
    else {
        console.log(`Buenas noches ${nombre}${apellido}`);
    }

}

saludoCompleto("Lila", "Sarfson", "mañana");

// Añade un borde de "grosorBrde" pixeles y de color "colorBorde" al DOM.
function cambiarBordeElemento(elemento, grosorBorde, colorBorde) {
    elemento.style.bordercolor = `${grosorBorde}px ${colorBorde} solid`;

    //o también se puede hacer así
    // elemento.style.borderColor = colorBorde;
    // elemento.style.borderWidth = grosorBorde + "px";
    // elemento.style.borderStyle = "solid";

}

let logo = document.querySelector(".header--logo");
cambiarBordeElemento(logo, 5, "red"); // voy a poner un borde rojo de 5px en el logo

let footer = document.querySelector(".footer");
cambiarBordeElemento(footer, 10, "green");

function ocultarMiembro(nombre) {
    if (nombre == "patricia") {
        document.querySelector(".card__patricia").style.display = "none";
    }
    else if (nombre == "verónica") {
        document.querySelector(".card__veronica").style.display = "none";
    }
    else if (nombre == "edurne") {
        document.querySelector(".card__edurne").style.display = "none";
    }



}

ocultarMiembro("edurne");

//otra manera de hacerlo sin el if
// function ocultarMiembro(nombre){
// document.querySelector(".display__" + nombre).style.display = "none";
// }

function saludoGenero(genero) {
    if (genero == "hombre") {
        return "bienvenido"
    }
    else if (genero == "mujer") {
        return "bienvenida"
    }
    else {
        return "Bienvenide"
    }
}

saludoGenero("mujer");

console.log(saludoGenero("hombre")); // Bievenido
console.log(saludoGenero("mujer")); // Bienvenida

console.log(saludoGenero("fluido")); // Bienvenide
console.log(saludoGenero("no binario")); // Bienvenide
// REESTRICCIÓN: NO SE PUEDE USAR Console.log dentro de esta función

    // Hay que utilizar return!!