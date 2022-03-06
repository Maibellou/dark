function validarFormulario(){
    if (document.formulario.nombre.value==""){ 
         alert("Nombre es obligatorio");
         document.formulario.nombre.focus();
         return false; 
} 
    
    if (document.formulario.apellido.value==""){ 
         alert("Apellido es obligatorio");
         document.formulario.apellido.focus(); 
         return false; 
} 
    
    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var valor = document.getElementById("email").value;
    if( !(ck_email.test(valor)) ) {
     alert("El mail ingresado no es válido");
     return false;
}

    if (document.formulario.comentario.value==""){ 
         alert("El campo Comentarios es obligatorio");
         document.formulario.comentario.focus();
         return false; 
} 
    
    alert("Muchas gracias por enviar su comentario"); 
    document.formulario.submit(); 
}

function spoiler(){
    alert("¡Alerta! Esta página tiene muchos Spoilers");
}