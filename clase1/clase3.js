// CICLOS o BUCLES

let nombre = prompt("Ingrese su Nombre");
console.log("Bienvenido ", nombre);

// Suponiendo que quiero pedir y dar la bienvenida 5 veces

// Ciclos por conteo (for)
// Ciclos condicionales

// FOR
for (desde; hasta;actualizacion){
    //codigo
}

let i = 0;

for( i; i < 10; i++ ) {
    console.log("El valor de i es ", i);
}
// Mientras i sea menor a 10, ejecuta el código
// i++ es igual a poner    i = i + 1

// BREAK
// Se interrumpe el for, no continúa con el loop
let num_uno;
let num_dos;
for ( i = 0; i < 3; i++ ){

    num_uno(parseInt(prompt("Ingrese un nro")));
    num_dos(parseInt(prompt("Ingrese otro nro")));

    if (num_dos == 0){
        console.log("No se puede dividir por 0");
        break
    }
    console.log("El resultado es ", num_uno / num_dos );
}
// CONTINUE
// Hace un salto y continúa por el siguiente 
// No se ejecuta lo que sigue, pero pasa al siguiente item del loop
for ( i = 0; i < 3; i++ ){

    num_uno(parseInt(prompt("Ingrese un nro")));
    num_dos(parseInt(prompt("Ingrese otro nro")));

    if (num_dos == 0){
        console.log("No se puede dividir por 0");
        continue
    }
    else {
        console.log("El resultado es ", num_uno / num_dos);
    }
}


// WHILE
// Bucle condicional. Mientras X condición se cumpla

while (10 > 5){     // Bucle infinito, 10 siempre va a ser mayor a 5.
    console.log("Hola");
}

// Mientras ingrese un Nombre le doy la bienvenida
let nomusr;
while ( nomusr != "SALIR"){
    nomusr = prompt("Ingrese un nombre o SALIR");
    console.log("Hola ", nomusr);
}


// Le pido que vote por 1, 2, o salga.
let club1 = 0
let club2 = 0;
let voto;
while ( voto != "SALIR"){
    
    voto = prompt("Vote 1, 2 o SALIR");
    
    if (voto == 1){
        club1 = club1 +1;
    }
    else if (voto == 2){
        club2 = club2 +1;
    }
    else{
        break
    } 
}

console.log('Opcion 1 ', club1);
console.log('Opcion 2 ', club2);

// DO WHILE para que se ejecute por lo menos una vez



/* DESAFIO
Crear un algoritmo utilizando un ciclo 
Tomando for while y do...while crear un algoritmo
*/
