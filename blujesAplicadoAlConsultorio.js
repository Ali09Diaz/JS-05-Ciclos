console.log("Bucles");

//Tarea  Aplicacion de ciclos

var contrasenaGuardada ="asd"
var usuarioGuardada = "Ali"

function logIn (){

let intentos = 1;
let accesIn = true;
while (accesIn && intentos<4){
    usuario=prompt("ingrese su nombre de usario:");

    contrasena=prompt("Ingrese su contrasena:")

    if (usuario===usuarioGuardada && contrasena===contrasenaGuardada){
        console.log("Acceso permitido");
        accesIn=false;
    }
    console.log(intentos)
    intentos++;
}
if(intentos===4){
    console.log("Exediste el numero de intentos ")
}
}
logIn();

