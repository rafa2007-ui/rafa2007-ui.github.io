
document.getElementById("btnH1").addEventListener("click", cambiarH1)
document.getElementById("btnP").addEventListener("click", cambiarParrafo)
document.getElementById("btnCeldas").addEventListener("click", cambiarCeldas)
document.getElementById("btnNueva").addEventListener("click", agregarCelda)
document.getElementById("btnColor").addEventListener("click", colorCeldas)

function cambiarH1(){
const h1 = document.getElementById("titulo")

h1.textContent = "DOM Manipulado"
h1.style.color = "red"
h1.classList.add("titulo-activo")
}

function cambiarParrafo(){
let p = document.getElementById("parrafo")

p.innerHTML += " <strong>Texto añadido con DOM</strong>"
}

function cambiarCeldas(){
document.getElementById("celda1").textContent="Nueva Celda 1"
document.getElementById("celda2").textContent="Nueva Celda 2"
}


function agregarCelda(){
let fila = document.querySelector("tr")

let nueva = document.createElement("td")
nueva.textContent="Celda nueva"

nueva.addEventListener("click", function(){
this.classList.add("amarillo")
})

fila.appendChild(nueva)
}


function colorCeldas(){
document.getElementById("celda1").style.background="lightblue"
document.getElementById("celda2").style.background="lightgreen"
}


document.querySelectorAll("td").forEach(celda=>{
celda.addEventListener("click",function(){
this.classList.add("amarillo")
})
})

// para coger todas las celdas de forma mas facil utilizamos el cons
// const act5 = document.querySelectorAll("td")
//act5[0].style.color="green";
// esto es para cuando tengamos muchas celdas como en el juego del tesoro con [0
// nos referimos a la primara y asi