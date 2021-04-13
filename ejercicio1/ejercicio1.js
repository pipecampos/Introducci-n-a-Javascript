
// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btn = document.getElementById("btn");

/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("resultado")
var minimo = document.getElementById("minimo")
var maximo = document.getElementById("maximo")
/* Obtenemos los dos input y los almacenamos en variables "inputUno" y "inputDos" */
var    inputUno    =    document.getElementById("input-uno");
var    inputDos     =   document.getElementById("input-dos"); 



// Añadimos el evento click a la variable "btn"
btn.addEventListener("click",function(){
    
/* Obtenemos el valor de cada input accediendo a su atributo "value" */
var  n1  =  inputUno.value;
var  n2  =  inputDos.value;

if(isNaN(n1) || isNaN(n2)){
    alert('Debe introducir un numero');
}else if((n1&&n2) == ""){
    alert('Debe ingresar números');
}else if(n1>n2){
   resultado.innerHTML = random(n2,n1);
   minimo.innerHTML = Number(n2);
   maximo.innerHTML = Number(n1);
}
else{
    resultado.innerHTML  =  random(n1,n2);
    minimo.innerHTML = Number(n1);
    maximo.innerHTML = Number(n2);
}   
      
});
    
/* Función que retorna la suma de dos números */
function  random(min, max){
    return Math.round(Math.random()*(max-min)+parseInt(min));
}
