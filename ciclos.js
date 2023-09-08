console.log("Bienvenido a los ciclos")

/**
 Condiciones: alterar el orden del codigo
 Estructura de control: controlar la ejecucion del codigo



 Ciclos o bucles (loops)

 Estructuras de control que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasta que se cumpla una condicion especifica. 

 Es importante usar ciclos para automatizar tareas repetititvas.

 En JS existen los siguientes ciclos:

    - While
    - Do while
    - For


 Iterar: Proceso de repetir una secuencia de instrucciones
 Estructura de control: Herramienta especial para crear algoritmos o programas mas dinamicos y flexibles. 



 */

 // While: Ejecuta un bloque de codigo mientras se cumpla una condicion especifica. Etse ciclo se repite mientras la condicion sea verdadera, y el bloque de codigo se ejecuta siempre y cuando la condicion se mantenga. La condicion se evalua antes de cada iteracion.



 /**
  * While (condition){
        //cdifo que se ejecuta
    }

  */

/* 
while (miCrushMeQuiere){
    console/log("sere feliz");
}
*/

/**
 Analogia: Seguir una receta para preparar sopa
    
    Lista de igredientes:
        -Zanahoria
        -Papas
        -Chayote
        -Limon
        -Agua
        -Espinaca

Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles.

Paramos cuando ya no tengamos ingredientes.

 */

//Ejemplo de un consultorio dental 

let capacidadPacientes = 50;
let pacientesEnConsultorio = 15;

//Mientras 15 sea enor que 50....
while (pacientesEnConsultorio < capacidadPacientes){
    //seguire dando servicio
    console.log ("Seguimos dando servicio");
    //aumenta en uno mis pacientes
    pacientesEnConsultorio++;
}


//Mientras sea verdadero se ejecuta la instruccion 

/* Do while  (hacer mientras)


//Se ejecuta la instruccion, mientras sea verdadero

El bucle do while se diferencia ya que se ejecuta la insf=truccion al menos una vez y luego pregunta si se sigue ejecutando o no.



do {
    //codigo a ejecutar

} while (condition);

Analogia: cuando preparamos un pastel
 
 */

//Ejemplo de un consultorio dental 

/* var contadorPacientes = 4;

do {
    var nombre = prompt ("Ingresa el nombre del paciente");
    if (nombre){
        contadorPacientes ++;
    }
}while (contadorPacientes < 5);

console.log("Numero total de pacientes: ", contadorPacientes);
*/

/*

 For (Para)

 Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realzar.
 Consiste de 3 partes fundamentales:

    - inicializacion: se ejecuta antes de que el bucle comience y se usa para establecer una variable de contrl (variable de inicio)
    - condicion: es el detonante que verifiquemos antes de cada iteracion, para saber si se sigue ejecutando o no (siempre y cuando sea verdadera)
    - expresion de iteracion (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre. 


    fot  (inicializacion: condicion: expresion de iteracion) {
        //bloque de codigo a ejecutar 
    }

 */


    // Crea un codigo que imprima los numeros del 0 al 4 

    for (var valorInicial = 0; valorInicial<5; valorInicial++) {
        console.log(valorInicial);
    }


//Version mas "comercial"
for (var i = 0; i<5; i++){
    console.log(i);
}


// Consultorio dental registro de citas con un for 

let cantidadDeCitasDiarias = 5;

for (let i=1; i<=cantidadDeCitasDiarias; i++){
    var nombre = prompt ("Ingrese el nombre del paciente" + i);


    console.log("Paciente con cita: " + i);
}

