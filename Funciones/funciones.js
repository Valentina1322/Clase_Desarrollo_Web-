const datos=[45,'Marte',34,98,'Luna',21,'Jupiter',54,'Urano','Sol',75,'estrella',34];
const numeros=[];



 datos.forEach(planetas => {
   
     if(!isNaN(planetas)){
        numeros.push(planetas);         
     }     
    
    });

console.log(datos);
console.log(numeros);

const impares=numeros.filter(numeros=> numeros%2!=0);
console.log(impares);

const planeta=datos.filter(datos=> isNaN(datos));
console.log(planeta)
