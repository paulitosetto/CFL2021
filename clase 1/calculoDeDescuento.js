let readlineSync = require('readline-sync');
let precioProducto= readlineSync.questionInt ('Ingrese el Precio');
let porcentajeDescuento = readlineSync.questionInt ('ingrese el descuento');
console.log("Ingrese el Precio", precioProducto);
console.log("ingrese el descuento", porcentajeDescuento);
console.log("preciofinal", precioProducto*(100-porcentajeDescuento)/100)