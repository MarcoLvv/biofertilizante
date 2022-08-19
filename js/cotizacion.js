
function cotizacion(){

    const humus = 3
    const liquid = 2
    const dirt = 15
    const worms = 3
    

    var hummus = document.getElementById("cotizacion_Hummus").value
    var liquid_hummus = document.getElementById("cotizacion_Liquid _Hummus").value
    var tierra = document.getElementById("cotizacion_tierra").value
    var gusanos = document.getElementById("cotizacion_gusanos").value

    humuz= humus*hummus
    litro= liquid * liquid_hummus
    kilo= dirt * tierra
    pieza= worms * gusanos
    total= humuz+pieza+kilo+litro

    document.getElementById("order").innerHTML="Precio total a pagar: "+total+" $"
}