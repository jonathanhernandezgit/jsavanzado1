//Con este código, si se deseara acceder a los valores de a y de b luego que finalice la ejecución de la función, tendríamos inconvenientes


var a = 1;
function primeraFuncion() {
    var b = 2;
    console.log ('a =', a);
    console.log ('b =', b);


}

primeraFuncion();

//Por lo que se implementará una función closure


var a = 1;
function primeraFuncion (){
    var  b = 2;
    return function() {
        console.log('a = ', a);
        console.log('b = ', b);
    }
}
//en la variable temp se guardará la función como tal, no el resultado de esta
var temp = primeraFuncion();

// para acceder a los valores de las variables se debe ejecutar la función temp()

temp();


//otro ejemplo

function crearSaludo(saludo, nombre){
    let saludoTemp = saludo;

    return function(nombre){
        console.log(saludoTemp + ' ' + nombre); 
    }
}

let saludoGuardado = crearSaludo('Hola!');

saludoGuardado('Jonathan');

//--------------------------

function nivel1 () {
    var b = 2;
    var c = 4;
    function nivel2() {
        var b = 4;
        var c = 3;
        function nivel3() {
            console.log(a);
        }
        nivel3();
        console.log(b);
    }
    console.log(c);
    console.log(b);
    nivel2();
}
nivel1();