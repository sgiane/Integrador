let valorDesc

function validar() {
    let valorTicket = 200
    let cantidad = document.getElementById("cantidad").value
    console.log(cantidad)
    let categoria = document.getElementById("categoria").value
    console.log(categoria)

    if (categoria == "estudiante") {
        valorDesc = ((valorTicket * cantidad)*80) / 100
    }
    else

        if (categoria == "trainee") {
            valorDesc = ((valorTicket * cantidad)*50) / 100
        }
        else {
            valorDesc = ((valorTicket * cantidad)*15) / 100
        }

    let totalPagar = (valorTicket*cantidad) - valorDesc
    document.getElementById("mostrar").innerHTML='Total a Pagar:$' +totalPagar
}
validar()