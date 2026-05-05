function modulo(){

const recetas = [
{ id: 1, nombrereceta: "Salmorejo", ingredientes: "tomate,aceite,pan" },
{ id: 2, nombrereceta: "Gachas", ingredientes: "harina,agua,azucar" },
{ id: 3, nombrereceta: "Migas", ingredientes: "pan,ajos,aceite" }
];

const tabla = document.getElementById("tabla")

recetas.forEach(receta => {
    const fila =`
    <tr>
    <td>${receta.id}</td>
    <td>${receta.nombrereceta}</td>
    <td>${receta.ingredientes}</td>
    <tr>
    `;

    tabla.innerHTML += fila;

});

}
