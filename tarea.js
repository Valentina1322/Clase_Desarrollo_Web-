// Punto 1
 // "x" e "y" son números
 // Suma "x" e "y" juntos y devuelve el valor
const suma = (a,b) =>{
  
  return (a+ b);   
}
console.log(suma(21,18));

// Punto 2
 // Devuelve "true" si "x" e "y" son iguales
 // De lo contrario, devuelve "false"
const sonIguales = (x, y)=>{
  
  return(x===y);
          
}
console.log(sonIguales(105,52));
 
//Punto 3
 // Devuelve "true" si las dos strings tienen la misma longitud
 // De lo contrario, devuelve "false"


function tienenMismaLongitud(str1, str2) {
  
  return (str1.length===str2.length);
}
  console.log(tienenMismaLongitud('Animo','Gatos'));


//Punto 4
 //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
 //Si el número es positivo, devolver ---> "Es positivo"
 //Si el número es negativo, devolver ---> "Es negativo"
 //Si el número es 0, devuelve false
  function esPositivo(numero) {

    if(numero>0)
  {
      return "Es positivo";
  }else if(numero<0)
  {
      return "Negativo";
      
  } else{
    return false;
  }      
  }
  console.log(esPositivo(22));

  //Punto 5
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.

  const colors = (color)=>{
    switch(color)
    {
        case "blue":
            return "This is blue";
        break;
        case "red":
            return "This is red";
        break;
        case "grenn":
             return "This is green";
         break;
         case "orange":
             return "This is orange";
         break;
         default:
             return "Color not found";
         break;
    }
    
  } 
  console.log(colors("blue"));

//Punto 6
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
  const fizzBuzz = (numero)  => {
    
    if(numero%3==0 && numero%5==0)
    {
        return "fizzbuzz";
    }else if(numero % 3==0)
    {
        return "fizz";
    }else if(numero%5==0)
    {
        return "buzz";
    }else
    {
        return numero;
    }
    
  }
  console.log(fizzBuzz(20));

 // Punto 7
  // Devuelve el primer elemento de un array
  const devolverPrimerElemento = (array) => {

    
    return array[0];
   }
   
   console.log(devolverPrimerElemento(['Lunes',24,'Jupiter','Jueves','Camila',12]));
  
 // Punto 8
    // Añade el "elemento" al final del array
    // y devuelve el array
  const agregarItemAlFinalDelArray = (array, elemento) =>{

    array.push(elemento);
    return array;
    
  }
  console.log(agregarItemAlFinalDelArray(['Lunes',24,'Jupiter','Jueves','Camila',12],'Urano'));

//Punto 9
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    var usuario={
      nombre:"",
      email:"",
      password:"",    
 }

 const nuevoUsuario = (nombre, email, password) => {
     
     if(usuario.nombre=="" && usuario.email=="" && usuario.password=="")
     {
       usuario.nombre=nombre;
       usuario.email=email;
       usuario.password= password;
 
       return usuario;
 
     }
     {
      return "Los datos del usuraio que ingreso no coinciden" ;  
     }
     }
     console.log(nuevoUsuario("Maria","maria022@gmail.com","123maria"))
    

//Punto 10
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    var usuarioExistente={
      nombre:"Isabella",
      password:"856421",    
 }
  const verificarPassword = (usuario, password) => {
    
    return (usuarioExistente.nombre==usuario&&usuarioExistente.password===password);

  }

  console.log(verificarPassword("Maria",12347));

//Punto 11
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    var usuarioModificarPass={
      nombre:"Julian",
      password:3456,    
 }

  const actualizarPassword =(usuario, nuevaPassword) => {
    
    if(usuarioModificarPass.nombre==usuario){
      usuarioModificarPass.password=nuevaPassword;
    }    
    return usuarioModificarPass;
  }
   console.log(actualizarPassword("Julian",89654));

//Punto 12
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"

    var user = {
      amigos: ['Pedro', 'Sebastian']
    }

  const agregarAmigo = (usuario, nuevoAmigo) => {
    

    user.amigos.push(nuevoAmigo);
    return user;
  }
  console.log(agregarAmigo(['Pedro', 'Sebastian'], 'Ana'));

//Punto 13
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    var usuariosB=[{nombre:'Andres',esPremium:true},{nombre:'Sara', esPremium:true},
    {nombre:'Juliana', esPremium:false},{nombre:'Felipe',esPremium:false},{nombre:'Sebastian', esPremium:false}];

  const pasarUsuarioAPremium =(usuarios) => {
    for(i=0;i<usuarios.length;i++){
      usuarios[i].esPremium=true;
    }
    return usuarios;
  }
  console.log(pasarUsuarioAPremium(usuariosB))
//Punto 14
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    let usuario = {
      posts: [{
        likes: 4
      }],

      posts: [{
        likes: 6
      }],

      posts: [{
        likes: 10
      }],

      posts: [{
        likes: 12
      }] 
    };

  const sumarLikesDeUsuario = usuario => {

    let suma=0;

    for(i=0;i<usuario.length;i++){
      for(j=0;j<usuario[i].length;j++){
      suma=usuario[i].likes;
      }
    }
    return suma;
    
  }
  console.log(sumarLikesDeUsuario(usuario))

 //Punto 15
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

    class Persona {
      constructor(nombre, apellido, edad, domicilio) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.domicilio=domicilio;
  
      }
        get detalle(){
         let datos={
           nombre:this.nombre,
           apellido:this.apellido,
           edad:this.edad,
           domicilio:this.domicilio
         } 
        return datos  
      }
  }
  const persona1=new Persona('Ana','Perez',28,'calle 45')
  console.log(persona1.detalle)
  
//Punto 16
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    const persona2=new Persona(nombre,apellido,edad,dir)
    return persona2  
}
console.log(crearInstanciaPersona("Juan", "Perez", 22, "Saavedra 123").detalle)

// Punto 17
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
const sumarArray = (numeros, cb) =>{
   let suma
   for(i=0;i<numeros.length;i++){
     suma=suma+numeros[i];
   }
   cb=suma  
}
console.log(sumarArray([5,10,65,2],0));

//Punto 18
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
const copiarEach = (array, cb) =>{
    
    
}

//Punto 19
    //Vamos a recibir una función que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    function suma(numUno, numDos) {
      return numUno+numDos;
    }

    const operacionMatematica =(n1, n2, cb) =>{
    return suma(n1,n2);    
  }
  console.log(operacionMatematica(3,7,0))

//Punto 20
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    function filter(array) {
    const nuevoArray=array.filter.
    
    return nuevoArray;
  } 

  
  console.log(filter(['Azucar','Dormir','Almohada','Alma','Soñar','Celular','Estudiar']));


  /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}


