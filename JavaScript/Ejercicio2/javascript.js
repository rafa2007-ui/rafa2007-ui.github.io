function modulo(){

let numero = document.getElementById("numero").value
let div = document.getElementById("resultado");

if(numero >= 1 && numero <= 30) {


if(numero % 2 != 0){
        document.getElementById("resultado").innerHTML =
        "El numero " + numero + " no es divisible entre 2 "
       
        
    } else {
        document.getElementById("resultado").innerHTML =
        "El numero " + numero + " es divisible entre 2 "
        
    }

        div.style.display = "block";
        div.style.backgroundColor = "black";
        div.style.color = "white";

}

else {
    document.getElementById("resultado").innerHTML = "El numero tiene que ser entre el 1 y el 30"
    div.style.display = "block";
        div.style.backgroundColor = "black";
        div.style.color = "white";
}
}
