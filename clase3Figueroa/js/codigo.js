let nombre;
let respuesta;
let estudio;
let materia = 0;
let materia1;
let materia2;
let materia3;

nombre = prompt("Ingrese su nombre. Escriba SALIR para finalizar el cuestionario.");

if (nombre != "SALIR"){
    alert('Bienvenido '+nombre);

    while (respuesta != "SALIR"){
        respuesta = prompt("¿Finalizo la Primaria? SI o NO" );
        
        if (respuesta.toString().toLowerCase() == "si"){
            estudio = "Primario Completo";
            respuesta = prompt("¿Finalizo la Secundaria? SI o NO" );
                
            if (respuesta.toString().toLowerCase() == "si"){
                estudio = "Secundario Completo";
                respuesta = prompt("Comenzó una carrera Universitaria? SI o NO" );
                
                if (respuesta.toString().toLowerCase() == "si"){
                    estudio = "Universitario incompleto";
                    respuesta = prompt("Terminó la Universidad? SI o NO" );
                    
                    if (respuesta.toString().toLowerCase() == "si"){
                        estudio = "Universitario Completo";
                        respuesta = prompt("Tiene estudios superiores a la Universad? SI o NO" );
                        
                        if (respuesta.toString().toLowerCase() == "si"){
                            estudio = "Universitario Completo y Otros";
                            break
                        }
                        else{
                            break
                        }
                    }
                    else{
                        break
                    }
                }
                else{
                    break
                }
            }
            else{
                break
            }
        }
        else{
            estudio = "Sin estudios";
            break
        }
    }       

    if (respuesta != "SALIR"){
        alert('Su maximo estudio alcanzado es '+estudio);
    }
    else{
        alert('No finalizó el cuestionario.');
    }
}
else{
    alert('No inició el cuestionario sobre su Nivel Educativo. ');
}

for (materia; materia < 3; materia++ ){
    if (materia == 0){
        materia1 = prompt("Ingrese su materia favorita");
        if (materia1 == "SALIR"){
            break
        }
    }
    else if (materia == 1){
        materia2 = prompt("Ingrese su segunda materia favorita");
        if (materia2 == "SALIR"){
            break
        }
    }
    else {
        materia3 = prompt("Ingrese su tercera materia favorita");
        if (materia3 == "SALIR"){
            break
        }
    }
}
if (materia1 != "SALIR" && materia2 != "SALIR" && materia3 != "SALIR"){
    alert("Sus materias favoritas son "+materia1+", "+materia2+"y "+materia3);
    alert(nombre+", gracias por participar!");    
}
else{
    alert('No finalizó el cuestionario sobre sus Áreas de Estudio de preferencia. ');
}
