let recuentoVisitas = localStorage.getItem('Contador');

if (!recuentoVisitas) {
    recuentoVisitas = 0;
 }
else {
    recuentoVisitas++}

localStorage.setItem('Contador', recuentoVisitas);

console.log(localStorage.getItem('Contador'));

//Paso el contador a htm

const contador = document.getElementById('contadorVisitas');
const reemplazar = localStorage.getItem('Contador')
contador.innerHTML = `${reemplazar}`;

const boton = document.getElementById('btnReestablecer')
boton.addEventListener ('click', function(){
   localStorage.removeItem('Contador');
})