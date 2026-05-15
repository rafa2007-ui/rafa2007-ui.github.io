function modulo(){

let numero = document.getElementById("numero").value
let div = document.getElementById("resultado");
let estaciones = ["Primavera","Verano","Otoño","Invierno"]

if(numero >= 1 && numero <= 4) {

        
        document.getElementById("resultado").innerHTML =
        estaciones[numero - 1] + " es la estacion numero " + numero
        div.style.display = "block";
        div.style.backgroundColor = "black";
        div.style.color = "white";

}

else {
    document.getElementById("resultado").innerHTML = "El numero tiene que ser entre el 1 y el 4"
    div.style.display = "block";
        div.style.backgroundColor = "black";
        div.style.color = "white";
}
}
