function modulo(){

let nombre = document.getElementById("nombre").value
let numero = document.getElementById("numero").value
let div = document.getElementById("resultado");

if(numero >= 5000) {

    numero = numero*0.90;

    document.getElementById("resultado").innerHTML = "El usuario " + nombre + " tiene que pagar una cantidad de " + numero + " euros"
    div.style.display = "block";
        div.style.backgroundColor = "black";
        div.style.color = "white";

} else if(numero <5000 && numero > 3000) {

    numero = numero*0.85;

    document.getElementById("resultado").innerHTML = "El usuario " + nombre + " tiene que pagar una cantidad de " + numero + " euros"
    div.style.display = "block";
        div.style.backgroundColor = "black";
        div.style.color = "white";
} else {

    numero = numero*0.79;

    document.getElementById("resultado").innerHTML = "El usuario " + nombre + " tiene que pagar una cantidad de " + numero + " euros"
    div.style.display = "block";
        div.style.backgroundColor = "black";
        div.style.color = "white";
}
}
