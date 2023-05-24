let contador = 0
let subtotales = [];



    

function agregarProducto(){

    contador++;
    
    //OBTENGO LOS DATOS
    let nombre = document.getElementById("nombreProducto").value
    let precio = document.getElementById("precioProducto").value
    let cantidad = document.getElementById("cantidadProducto").value
    let categoria = document.getElementById("categoriaProducto").value

    let listaProductos = document.getElementById("listaProductos")

        //CREO LA FILA
    let tr = document.createElement("tr")
    tr.setAttribute("id",contador)

    //CREO LAS COLUMNAS
    let tdId = document.createElement("td")
    tdId.innerHTML = contador
    tr.appendChild(tdId)

    let tdCategoria = document.createElement("td")
    tdCategoria.innerHTML = categoria
    tr.appendChild(tdCategoria)

    let tdNombre = document.createElement("td")
    tdNombre.innerHTML = nombre
    tr.appendChild(tdNombre)

    let tdPrecio = document.createElement("td")
    tdPrecio.innerHTML = precio + " $"
    tr.appendChild(tdPrecio)

    let tdCantidad = document.createElement("td")
    tdCantidad.innerHTML = cantidad
    tr.appendChild(tdCantidad)

    let subtotal = cantidad * precio

    let tdSubtotal = document.createElement("td")
    tdSubtotal.innerHTML = subtotal +  " $"
    tr.appendChild(tdSubtotal)

    let tdOperacion = document.createElement("td")
    let a = document.createElement("href", "#")
    a.setAttribute("onClick",`borrarProducto('${contador}')`)
    a.innerHTML="<i class='bi bi-trash-fill'></i>"
    tdOperacion.appendChild(a)

    tr.appendChild(tdOperacion)

    listaProductos.appendChild(tr)

    subtotales.push(subtotal)
    console.log(subtotales)
    
    let total = subtotales.reduce((total, valor) => total + valor, 0);
    

    



}



function sumaTotal(){
    let inputTotal = document.getElementById("inputTotal")
    let total = subtotales.reduce((total,valor)=> total + valor , 0);
        inputTotal.value = total + " $"

        console.log("El valor total es: "+ total)

}


// FUNCION PARA BORRAR UN PRODUCTO POR SU ID
function borrarProducto(idTr){

    let listaProductos = document.getElementById("listaProductos")
    let tr = document.getElementById(idTr)

    listaProductos.removeChild(tr)

    subtotales.splice(0, 1)
    console.log(subtotales)
}






