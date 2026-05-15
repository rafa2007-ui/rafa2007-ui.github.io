function modulo(){

let mes = document.getElementById("mes").value
let div = document.getElementById("resultado");
let estaciones = ["Primavera","Verano","Otoño","Invierno"]


switch(mes) {

        case "Enero":
        document.getElementById("resultado").innerHTML =
        "La estacion de enero es el invierno"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Febrero":
        document.getElementById("resultado").innerHTML =
        "La estacion de febrero es el invierno"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Marzo":
        document.getElementById("resultado").innerHTML =
        "La estacion de marzo es la primavera"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Abril":
        document.getElementById("resultado").innerHTML =
        "La estacion de abril es la primavera"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Mayo":
        document.getElementById("resultado").innerHTML =
        "La estacion de mayo es la primavera"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Junio":
        document.getElementById("resultado").innerHTML =
        "La estacion de junio es el verano"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Julio":
        document.getElementById("resultado").innerHTML =
        "La estacion de julio es el verano"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Agosto":
        document.getElementById("resultado").innerHTML =
        "La estacion de agosto es el verano"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Septiembre":
        document.getElementById("resultado").innerHTML =
        "La estacion de septiembre es el otoño"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Octubre":
        document.getElementById("resultado").innerHTML =
        "La estacion de octubre es el otoño"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Noviembre":
        document.getElementById("resultado").innerHTML =
        "La estacion de noviembre es el otoño"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;

        case "Diciembre":
        document.getElementById("resultado").innerHTML =
        "La estacion de diciembre es el invierno"

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";
        break;


}
        document.getElementById("resultado").innerHTML =
        estaciones[numero - 1] + " es la estacion numero " + numero

        div.style.display = "block";
        div.style.backgroundColor = "red";
        div.style.color = "yellow";

}
