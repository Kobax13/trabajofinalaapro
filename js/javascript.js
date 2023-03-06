var nombreCompleto = "hola mi nombre es axel";


console.log(nombreCompleto)

var opcion = prompt("Usted es de San Nicolas de los arroyos?")
    if( opcion=="si"){
        alert ("El delivery no tiene cargo")
    } else{
        alert("El delivery tiene cargo")
    }


//prompt es parecido al alert 

var miNombre = prompt("groso, pone tu nombre");
var miApellido = prompt("Hola " + miNombre + ", ahora tu apellido capo :)");
var miEdad = prompt("Ok " + miNombre +" "+ miApellido + ", ahora poneme tu edad master");
    if (miEdad >= 18){
        alert("Joya sos mayor :)")
    } else{
        alert("sos menor, pedile permiso a tus viejos :/")
    }
    

console.log(miNombre)
console.log(miApellido)
console.log(miEdad) 
