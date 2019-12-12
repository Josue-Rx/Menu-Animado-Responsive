let boton = document.querySelector('#icono'); 
let enlaces = document.querySelector('#enlaces');
let contador = 0; 


boton.addEventListener("click", function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos'); 
        contador ++;
    }else {
        enlaces.classList.remove('dos'); 
        enlaces.className = ('enlaces uno');
        contador --;  
    }
});