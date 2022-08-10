// VALORES BOOLEANOS - Logicos : V o F
let verdadero = true;   // 1 
let falso = false;      // 0

//
// OPERADORES RELACIONALES

    // IGUALDAD == doble signo

    let resultado1 = 10 == 10; // RESULTADO es automaticamente boolean
    console.log(resultado1); // true 

    let resultado2 = 10 == 5; 
    console.log(resultado2); // false

    let x = 30; 
    let y = 50; 
    console.log(x == y); // false
    console.log(y == x + 20); // true

    // MAYOR >
    console.log(y == x + 20); // true

    // MENOR < 
    console.log(y < x); // false

    // MAYOR O IGUAL >=
    console.log(18 >= 18); // true
    console.log(17 >= 18); // false

    // MENOR O IGUAL <=
    console.log(20 <= 50); // true
    console.log(10 <= 10); // true

    // DISTINTO !=
    console.log(20 != 50); // true
    console.log(10 != 10); // false

//
// CONTROL DE FLUJO
// El diagrama de flujo muestra como es el flujo del algoritmo

let nro1 = prompt("Ingrese un nro.");
let nro2 = prompt("Ingrese un nro.");
let resultado = parseInt(nro1) + parseInt(nro2);

if (10 == 10 ){
    console.log("Se cumple");
}

    
if (10 > 20 ){
    console.log("Se cumple el if");
}
else {
    console.log("Se cumple el else");
}


if (10 > 20 ){
    console.log("Se cumple el if");
}
else if (10 == 10){
    console.log("Se cumple el else if");
}
else {
    console.log("Se cumple el else");
}


// Se ingresa edad - Si es mayor a 18 mostramos mensaje de bienvenida

let edad_usuario = prompt("Ingrese su edad");

edad_usuario = parseInt(edad_usuario);

if (edad_usuario >= 18){
    console.log("Bienvenido/a");
}
else {
    console.log("No podes ingresar");
}


// AND  &&
// OR   ||

let tutor = prompt("¿Viniste con Tutor? SI o NO");

if (edad_usuario >= 18){
    console.log("Bienvenido/a");
}
else if (edad_usuario >= 16 && tutor == "SI"){
    console.log("Bienvenido/a");
}
else {
    console.log("No podes ingresar");
}
