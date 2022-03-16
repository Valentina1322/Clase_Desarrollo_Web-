function buscar(){
 var infoBuscar=document.getElementById("cuadroBuscar").innerHTML;
 console.log(infoBuscar);
 if((infoBuscar==='Sombra y hueso')||(infoBuscar==="Harry Potter y la piedra filosofal")){
     alert("El libro se encuentra disponible")
 }
 else{
     if((infoBuscar==="El psicoanalista")){
         alert("El libro se encuentra agotado")
     }
     else{
         alert("No se encontro el libro")
     }
 }
 
}
s