
let str="123456789";
let expRegNumCuenta=/^\d{10}$/;
//console.log(expRegNumCuenta.test(str));

let str2="4500";

let expRegNumTrabajadores=/^(4[5-9]|[5-9]\d|[1-9]\d\d|[1-9]\d\d\d|[1-9]\d\d\d\d|[1-9]\d\d\d\d\d)$/; //de 45 a 999999 es true/valido
let expRegNumFabricas=/^([3-9]|[1-9]\d|[1-9]\d\d|[1-9]\d\d\d)$/; //de 3 a 9999 es true/valido

console.log(expRegNumTrabajadores.test(str2));