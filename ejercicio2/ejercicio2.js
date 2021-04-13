
// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btnSumar = document.getElementById("btnSumar");
var btnRestar = document.getElementById("btnRestar");
var btnMultiplicar = document.getElementById("btnMultiplicar");
var btnDividir = document.getElementById("btnDividir");


/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("resultado")
/* Obtenemos los dos input y los almacenamos en variables "inputUno" y "inputDos" */
var    inputUno    =    document.getElementById("input-uno");
var    inputDos     =   document.getElementById("input-dos"); 



// Añadimos el evento click a la variable "btn"
btnSumar.addEventListener("click",function(){
    
/* Obtenemos el valor de cada input accediendo a su atributo "value" */
var  n1  =  inputUno.value;
var  n2  =  inputDos.value;

if(isNaN(n1) || isNaN(n2)){
    alert('Debe introducir un numero');
}else
if((n1&&n2) == ""){
    alert('Debe ingresar números');
}
else{
    /* Llamamos a una función que permite realizar la suma de los números y los
mostramos al usuario" */
resultado.innerHTML  =  suma(n1,n2);
}

      
});
    

/* Función que retorna la suma de dos números */
function  suma(n1,  n2){
// Es necesario aplicar parseInt a cada número
return parseInt(n1) + parseInt(n2); 
}
//Restar
btnRestar.addEventListener("click",function(){
    
    var  n1  =  inputUno.value;
    var  n2  =  inputDos.value;
    if(isNaN(n1) || isNaN(n2)){
        alert('Debe introducir un numero');
    }else if((n1&&n2) == ""){
        alert('Debe ingresar números');}
        else{
            resultado.innerHTML  =  resta(n1,n2); 
        }
    
    });
    
   
    function  resta(n1,  n2){
    return parseInt(n1) - parseInt(n2); 
    }
//Multiplicar
btnMultiplicar.addEventListener("click",function(){
    
    var  n1  =  inputUno.value;
    var  n2  =  inputDos.value;
    if(isNaN(n1) || isNaN(n2)){
        alert('Debe introducir un numero');
    }else
    if((n1&&n2) == ""){
        alert('Debe ingresar números');}
        else{
            resultado.innerHTML  =  multiplica(n1,n2); 
        }
    
    });
    
   
    function  multiplica(n1,  n2){
    return parseInt(n1) * parseInt(n2); 
    }
//Dividir
btnDividir.addEventListener("click",function(){
    
    var  n1  =  inputUno.value;
    var  n2  =  inputDos.value;

    if(isNaN(n1) || isNaN(n2)){
        alert('Debe introducir un numero');
    }else
    if((n1&&n2) == ""){
        alert('Debe ingresar números');}
        else{
            n2 = Number(n2);
    switch(n2){
        case 0: alert('No se puede dividir por 0'); break;
        default :  resultado.innerHTML  =  divide(n1,n2); break;
    }
        }
    //condicion dividendo = 0
       
    });
    
   
    function  divide(n1,  n2){
    return parseInt(n1) / parseInt(n2); 
    }