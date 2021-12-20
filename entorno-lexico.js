
//Contexto global
console.log (this);

//contexto de la función 
function incremental (val) {
    return val +1;
}

incrementar(9);

//contexto léxico

var a = 1;
function primeraFuncion () {
    console.log('El valor de a es: ', a);
}

function imprimirLetra() {
    var a = 2;
    primeraFuncion();
}

imprimirLetra();