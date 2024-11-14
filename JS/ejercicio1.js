//solicitar al usuario un numero a traves de un prompt
//empezando desde 1 e ir incrementando este valor de a 1
// 1 2 3 4 5 6 7 8 9 ---12,122
//a medida que vemos todos los numeros enteros anteriores includo el ingresado por el usuario quiero hacer un log de aquellos numeros que son multiples de 7


//el log debe ser el siguiente

// *El numero X es multiplo de 7

// const numeroingresado = parseInt (prompt (`Incresa un numero entero para calcular sus multiplos:`))
// let numero = 1

// while (numero <= numeroingresado) {

//     if (numero % 7 === 0) {

//             console.log (`el numero $(numero) es multiplo de 7`);
//         }
//         numero++; //numero + 1
//     }



//# Ejercicio 2

/*
solicitar a una maestra qye ingresa las calificaciones de sus alumnos
pedir constantemente las notas gasta que la maestra ingrese un 0 como valor. EN ese momento saldremos de nuestro bucle e imprimiremos el promedio del curiso segun las notas
*/

let nota = parseInt (  prompt("Ingrese la calificacion del alumno") );
let cantidadNotas = 0;
let acumuladoNotas = 0;

while (nota !== 0) {

    
    if(nota > 0) {
        cantidadNotas++;
        acumuladoNotas += nota;
    } 
    
    nota = parseInt (prompt ("Ingrese la calificación del alumno"));

                    };

const promedio = acumuladoNotas/cantidadNotas    

console.log (`El promedio de notas es de: ${promedio}`)
