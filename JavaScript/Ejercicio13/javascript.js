let matriz = [];

for (let i = 0; i < 20; i++) {
    matriz[i] = [];
    for (let j = 0; j < 20; j++) {
        matriz[i][j] = 1;
    }
}

let numAle1 = Math.floor(Math.random() * 20);
let numAle2 = Math.floor(Math.random() * 20);

let intentos = 0;
let maxIntentos = 5;

function modulo() {

    let x = parseInt(document.getElementById("valorx").value);
    let y = parseInt(document.getElementById("valory").value);

    intentos++;

    if (x === numAle1 && y === numAle2) {

        document.getElementById("resultado").innerHTML =
        "HAS ENCONTRADO EL TESORO";

    } else {

        let direccionY = "";
        let direccionX = "";

        if (y > numAle2) {
            direccionY = "SUR";
        } else if (y < numAle2) {
            direccionY = "NORTE";
        }

        if (x > numAle1) {
            direccionX = "ESTE";
        } else if (x < numAle1) {
            direccionX = "OESTE";
        }

        let pista = direccionY + direccionX;

  let imagen = "";

    if(pista === "SUR") {
    imagen = "<img src='imagenes/sur.png' width=400' height='200'>";
    } else if(pista === "NORTE") {
    imagen = "<img src='imagenes/norte.png' width='400' height='200'>";
    } else if(pista === "ESTE") {
    imagen = "<img src='imagenes/este.png' width='400' height='200'>";
    } else if(pista === "OESTE") {
    imagen = "<img src='imagenes/oeste.png' width='400' height='200'>";
    } else if(pista === "SURESTE") {
    imagen = "<img src='imagenes/sureste.png' width='400' height='200'>";
    } else if(pista === "SUROESTE") {
    imagen = "<img src='imagenes/suroeste.png' width='400' height='200'>";
    } else if(pista === "NORTEESTE") {
    imagen = "<img src='imagenes/noreste.png' width='400' height='200'>";
    } else if(pista === "NORTEOESTE") {
    imagen = "<img src='imagenes/noroeste.png' width='400' height='200'>";
    }

        if (intentos < maxIntentos) {

            document.getElementById("resultado").innerHTML =
            "Fallaste. Direccion: " +
            "<br>" + imagen +
            "<br>Intento " + intentos + " de " + maxIntentos;

            document.getElementById("valorx").value = "";
            document.getElementById("valory").value = "";

        } else {

            document.getElementById("resultado").innerHTML =
            "Juego terminado. El tesoro estaba en: "
            + numAle1 + " , " + numAle2;
        }
    }
}