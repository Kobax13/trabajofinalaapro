var nombreCompleto = "Devocion al gato";


alert("Bienvenido a " + nombreCompleto);

var opcion = prompt("Usted es de San Nicolas de los arroyos?")

if( opcion=="si"){
    alert ("El delivery no tiene cargo")
} else{
    alert("El delivery tiene cargo")
}
//prompt es parecido al alert 
var miNombre = prompt("groso, pone tu nombre y apellido");
var miEdad = prompt("Hola " + miNombre + ", ahora tu edad capo :)");
if (miEdad >= 18){
    alert("Joya sos mayor " + miNombre + " :)")
} else{
    alert("sos menor " + miNombre + ", pedile permiso a tus viejos :/")
}

console.log(miNombre)
console.log(miEdad)