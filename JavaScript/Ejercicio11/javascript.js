function modulo(){

let numero = document.getElementById("numero").value
let contador = 0;

for(let i = numero; i > 0; i--) {

    contador += parseInt(i);
    
}

document.getElementById("resultado").innerHTML = "La suma total es de " + contador
}
