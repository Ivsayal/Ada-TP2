var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },
    
        { fecha: new Date(2019, 2, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
        { fecha: new Date(2019, 2, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"}, 
        { fecha: new Date(2019, 2, 1), nombreVendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: "Centro"},
        { fecha: new Date(2019, 2, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
        { fecha: new Date(2019, 2, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"}, 
        { fecha: new Date(2019, 2, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
        { fecha: new Date(2019, 2, 21), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro"},
        { fecha: new Date(2019, 2, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
        { fecha: new Date(2019, 2, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
        { fecha: new Date(2019, 2, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
        { fecha: new Date(2019, 2, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
        { fecha: new Date(2019, 2, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
        { fecha: new Date(2019, 2, 1), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro"},
        { fecha: new Date(2019, 2, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
        { fecha: new Date(2019, 2, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"},

    ],

    precios: [
        { componente: "Monitor GPRS 3000", precio: 200 },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ],

    sucursales: ['Centro', 'Caballito']
};


function precioMaquina(componentes) {
    var componentesPrecios = 0
    for (var i = 0; i < componentes.length; i++) {
        // console.log (componentes[i]);
        for (var j = 0; j < local.precios.length; j++) {
            if (componentes[i] == local.precios[j].componente) {
                componentesPrecios += local.precios[j].precio;
            }
        }
    }
    return componentesPrecios
}

precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])
console.log('El precio de la máquina que se puede armar con esos componentes es $' + precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))

// console.log (local.ventas[0].componentes)


function cantidadVentasComponente(componente) {
    var ventasProducto = 0
    for (var i = 0; i < local.ventas.length; i++) {
        for (var z = 0; z < local.ventas[i].componentes.length; z++) {
            // console.log (local.ventas[i].componentes[z])
            if (componente == local.ventas[i].componentes[z]) {
                ventasProducto++;
            }
        } 
    }
    return ventasProducto
}

cantidadVentasComponente("Monitor ASC 543")
console.log('El componente fue vendido ' + cantidadVentasComponente("Monitor ASC 543") + ' veces.');



// consigna 3: for, getfullyear, getfullmonth, if

// vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) 
// y devuelve el *nombre de la vendedora* que más vendió en plata en el mes. 
// O sea no cantidad de ventas, sino importe total de las ventas. 
//El importe de una venta es el que indica la *función precioMaquina*.

function vendedoraDelMes(mes, anio) {
    var detalleVenta = []

    for (var i = 0; i < local.ventas.length; i++) {

        if (mes == local.ventas[i].fecha.getMonth() + 1 && anio == local.ventas[i].fecha.getFullYear()) {
            //  console.log (local.ventas[i].fecha.getMonth()+1)
            //  console.log (local.ventas[i].fecha.getFullYear())
            detalleVenta.push(local.ventas[i])
            // console.log (local.ventas[i].componentes)
        }
    }

    var queVendioAda = []
    var queVendioGrace = []

    for (var z = 0; z < detalleVenta.length; z++) {
        // console.log(detalleVenta[z])

        if (detalleVenta[z].nombreVendedora == 'Ada') {
            queVendioAda.push(detalleVenta[z].componentes)
            // console.log(queVendioAda)

        } else if (detalleVenta[z].nombreVendedora == 'Grace') {
            queVendioGrace.push(detalleVenta[z].componentes)
           
        } 
    }

    var preciosAda = 0 
    var preciosGrace = 0 

    for ( var x = 0; x < queVendioAda.length; x ++){
        preciosAda += precioMaquina(queVendioAda[x])  
    }

    for ( var w = 0; w < queVendioGrace.length; w ++){
        preciosGrace += precioMaquina(queVendioGrace[w])  
    }

    // console.log (preciosAda)
    // console.log (preciosGrace)

    var vendedoraGanadora = ''

    if (preciosAda > preciosGrace){
        vendedoraGanadora = 'La vendedora que más vendió en el mes es Ada'
    } else {
        vendedoraGanadora = 'La vendedora que más vendió en el mes es Grace'
    }

    return vendedoraGanadora
}

vendedoraDelMes(1, 2019)
console.log(vendedoraDelMes(1, 2019))



// // Forma de resolver la funcion sin hardcodearla:

// function vendedoraDelMes (mes,anio){
//     var arrayVendedoras = [];
//     for(var j = 0; j < local.vendedoras.length; j++){
//         var objetoNuevo = 
//         {   nombre: local.vendedoras[j],
//             ventas: 0,
//         }
//         for(var i = 0; i < local.ventas.length; i++){
//             if(local.ventas[i].fecha.getMonth()+1 == mes && local.ventas[i].fecha.getFullYear() == anio){
//                 if(objetoNuevo.nombre == local.ventas[i].nombreVendedora){
//                         objetoNuevo.ventas = objetoNuevo.ventas + precioMaquina(local.ventas[i].componentes)
//                 }
//             }
//         }
//         arrayVendedoras.push(objetoNuevo)
//     }
//     //console.log(arrayVendedoras)
//     var valorMaximo = 0;
//     var nombreVendedora = "";
//     for(var k = 0; k < arrayVendedoras.length; k++){
//         if(valorMaximo < arrayVendedoras[k].ventas){
//             valorMaximo = arrayVendedoras[k].ventas;
//             nombreVendedora = arrayVendedoras[k].nombre;
//         }
//     }
//     return nombreVendedora
// }
// vendedoraDelMes(1,2019)
// console.log("La vendedora del mes es: " + vendedoraDelMes(1,2019))


// vendedoraDelMes (1, 2019)
// console.log(vendedoraDelMes (1, 2019))

// Ejercicio 1 - Funcion #4
// ventasMes(mes, anio): Obtener las ventas de un mes.

// console.log( ventasMes(1, 2019) ); // 1250


function ventasMes (mes, anio) {

    var fechaVenta =  []
    for (var i = 0; i < local.ventas.length; i ++){
        if (mes == local.ventas[i].fecha.getMonth() + 1 && anio == local.ventas[i].fecha.getFullYear()){
            fechaVenta.push(local.ventas[i])
        }
    }
    // } console.log (fechaVenta)

    var productosVendidosMes = []
    for (var x = 0 ; x < fechaVenta.length; x ++){
    productosVendidosMes.push(fechaVenta[x].componentes)
    }
    // console.log(productosVendidosMes)

    var ventasTotalMes = 0 
    for (var y = 0 ; y < productosVendidosMes.length; y ++){
        ventasTotalMes += precioMaquina(productosVendidosMes[y])
    } 
    // console.log (ventasTotalMes) 
    return ventasTotalMes
}

ventasMes (1, 2019)
console.log ('El total de ventas del mes es de: $', ventasMes(1, 2019))

// Ejercicio 1 - Funcion # 5
// ventasVendedora(nombre): 
// Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
// console.log( ventasVendedora("Grace") ); // 900

function ventasVendedora ( vendedora ) {
    
    var productosVendidosDelMes = []
    for ( var x = 0; x < local.ventas.length; x++){
        if ( vendedora == local.ventas[x].nombreVendedora){
            productosVendidosDelMes.push (local.ventas[x].componentes)
        }    
    }// console.log (productosVendidosDelMes)
    
    ventasTotales = 0   
    for ( var y = 0; y < productosVendidosDelMes.length; y ++){
        ventasTotales += precioMaquina(productosVendidosDelMes[y])
    }

    return ventasTotales
}   

ventasVendedora ('Grace')
console.log ('Grace tuvo ventas por un total de: $', ventasVendedora ('Grace'))

// Ejercicio 1 - Función # 6
// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. 
// El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
// console.log( componenteMasVendido() ); // Monitor GPRS 3000

// function componenteMasVendido ( nombreComponente) {

//     var arrayProductos = []; 

//     for (i = 0; i < local.ventas.length; i++){
//         for (x = 0; x < local.ventas.componentes.length; x++){

//             var objetoProductos =
            
//             { nombre: local.ventas.componentes[x],
//               ventas: 0,
//             }  
//                 for ( y = 0; y < local.ventas.length; y ++){
//                     if ( objetoProductos.nombre == local.ventas.componentes[y]){
                        
//                         objetoProductos.ventas = objetoProductos.ventas + cantidadVentasComponente(local.ventas[y].componentes)
//                     }
//                 }
//         }
//         arrayProductos.push(objetoProductos)
//     }

//    console.log(arrayProductoss) 
// }

// console.log(componenteMasVendido())

// Ejercicio 1 - Función # 6
// huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. 
// El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

// console.log( huboVentas(3, 2019) ); // false

function huboVentas (mes, anio){

    var fechaVentas = false

    for (i = 0; i < local.ventas.length; i ++){
        if (mes == local.ventas[i].fecha.getMonth() + 1 && mes < 12){
            fechaVentas = true
        } else {
            false
        }
    }
    return fechaVentas
}

console.log ('Hubieron ventas en el mes: ', huboVentas (3, 2019))


// Ejercicio 2 - Función # 1
//Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
//console.log( ventasSucursal("Centro") ); // 4195

function ventasSucursal (sucursal){
    
    var productosVendidos = []    
    for (i = 0; i < local.ventas.length; i++){
        if (sucursal === local.ventas[i].sucursal){
            productosVendidos.push(local.ventas[i].componentes) 
        }    
    } 

    var totalSucursal = 0 
    for (x = 0; x < productosVendidos.length; x ++){
        totalSucursal += precioMaquina(productosVendidos[x])
    } 
    return totalSucursal
}

console.log("Total ventas de la sucursal:", ventasSucursal("Centro"));


// Ejercicio 2 - Función # 2
// Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) 
//y devuelve el *nombre de la sucursal* que más vendió en plata en el mes. No cantidad de ventas, 
//sino importe total de las ventas. 
//El importe de una venta es el que indica la función precioMaquina. 
//El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

//console.log( sucursalDelMes(1, 2019) ); // "Centro"
//  

function sucursalDelMes (mes, anio){

    var detalleVentaSucursal = []

    for (i = 0; i < local.ventas.length; i++){
        if (mes == local.ventas[i].fecha.getMonth() + 1 && anio == local.ventas[i].fecha.getFullYear()) {
            detalleVentaSucursal.push(local.ventas[i])
        }
    }

    var ventasCentro = []
    var ventasCaballito = [] 
    for (x = 0; x < detalleVentaSucursal.length; x ++){

        if (detalleVentaSucursal[x].sucursal == "Centro"){
            ventasCentro.push (detalleVentaSucursal[x].componentes)
        
        } else if (detalleVentaSucursal[x].sucursal == "Caballito") {
            ventasCaballito.push(detalleVentaSucursal[x].sucursal)
        }
    }

    var preciosVentasCentro = 0
    var preciosVentasCaballito = 0
    for (y = 0; y < ventasCentro.length; y ++){
        preciosVentasCentro += precioMaquina(ventasCentro[y])   
    }

    for (z = 0; z < ventasCaballito.length; z ++){
        preciosVentasCaballito += precioMaquina(ventasCaballito[z])
    }

    var mejorSucursalDelMes = ''
    if (preciosVentasCentro > preciosVentasCaballito) {
        console.log ('La sucursal que más vendió en el mes fue Centro')
    } else {
        console.log ('La sucursal que más vendió en el mes fue Caballito')     
    }

    return mejorSucursalDelMes

}

console.log (sucursalDelMes (1, 2019));







