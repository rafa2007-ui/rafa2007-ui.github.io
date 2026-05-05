function modulo(){

let nombre = document.getElementById("nombre").value
let pueblo = document.getElementById("pueblo").value
let provincia = document.getElementById("provincia").value
let div = document.getElementById("resultado");


if(provincia == "Cordoba") {
    provincia = "cordobes"
} else if(provincia == "Jaen") {
    provincia = "jienense"
} else if(provincia == "Cadiz") {
    provincia = "gaditano"
} else if(provincia == "Huelva") {
    provincia = "onubense"
} else if(provincia == "Granada") {
    provincia = "granadino"
} else if(provincia == "Sevilla") {
    provincia = "Sevillano"
} else{
    provincia = "Malagueño"
}

document.getElementById("resultado").innerHTML = nombre + " es " + provincia + " de " + pueblo
}
