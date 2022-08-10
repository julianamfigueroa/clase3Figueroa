/*

A diferencia de los lenguajes de programacion compilado, JS es un lenguaje INTERPRETADO
Se ejecuta por medio de un interprete, en este caso el Navegador
Datos - Variables - Objetos - Arrays - Funciones

Formas de agregar JS
1) Dentro del HTML, dentro de las etiquetas script
	<script>
		-- Codigo HTML
	</scrip>

2) <script src=""> </script>
Se suele poner antes de cerrar el /body

let   --> para declarar una variable una UNICA VEZ
nomenclatura snake case todo minuscula con guiones bajo separando 
number (int o float) es valor numerico, string es para cadena de texto, se escribe con " "

*/


// Declaramos variables con y sin valor
let edad_usuario = 30; 
let nombre_usuario = "Jose"; 
let tel_usuario; // Se puede declarar vacia

console.log(edad_usuario); //debug
console.log(nombre_usuario); 

edad_usuario = 50; // No se vuelve a declarar con let

// Se utilizan los mismos operadores + - / *
edad_usuario = edad_usuario * 2; 

// Concatenacion 
let x = "Jose";
let y = 40; 
let resultado1 = x + y; // El resultado es Jose40 

let xx = "Jose";
let yy = "Lopez"; 
let resultado2 = xx + yy; // El resultado es JoseLopez 

// console_log es un tipo de salida de datos que se guarda en la consola
// alert es otro tipo de salida de datos pero lanza un cartel popup
console.log(resultado2); 
alert(resultado2);

let edad_new_usr; 
edad_new_usr = prompt("Ingrese su Edad");
/* Lo que se guarda en el prompt son SIEMPRE string
 Si ingreso 30, llega "30"
 Para forzar el tipo de dato y convertirlo a numero
 Suponiendo que num_uno es "10" y num_dos es "20" 
 Con parseInt lo convierte en entero */
resultado2 = parseInt(num_uno) + parseInt(num_dos);
resultado2 = parseFloat(num_uno); //para no perder el decimal 

console.log("La edad del Usuario es ", edad_new_usr); 
// La , coma para concatenar
