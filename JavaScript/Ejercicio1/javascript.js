function mostrarDatos(){

let nombre = document.getElementById("nombre").value
let apellidos = document.getElementById("apellidos").value
let edad = document.getElementById("edad").value

if(edad >= 18){
        document.getElementById("resultado").innerHTML =
        nombre + " " + apellidos + " tiene " + edad + " es mayor de edad"
        
    } else {
        document.getElementById("resultado").innerHTML =
        nombre + " " + apellidos + " tiene " + edad + " es menor de edad"
    }

}