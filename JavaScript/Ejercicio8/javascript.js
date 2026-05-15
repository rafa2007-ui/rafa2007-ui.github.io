function modulo(){

let KM = document.getElementById("KmaMillas").value
let Millas = document.getElementById("MillasaKm").value

KM = KM/1.60;
Millas = Millas*1.60;

if(KM == 0 && Millas > 0) {

document.getElementById("resultado").innerHTML = "Las millas introducidas son un total de " + Millas + " Km"
} else if(Millas == 0 && KM > 0) {
document.getElementById("resultado").innerHTML = "Los km introducidos son un total de " + KM + " Millas"
} else if(KM == 0 && Millas == 0) {
document.getElementById("resultado").innerHTML = "Ningun valor introducido";
} else if(KM > 0 && Millas > 0) {
document.getElementById("resultado").innerHTML = "Las millas introducidas son un total de " + Millas + " Km y los km introducidos son un total de " + KM + " millas" 

}

}
