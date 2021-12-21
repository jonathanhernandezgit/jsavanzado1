// var variableGlobal = "Hola Global";

// function saludoLocal(){
//     var variableLocal = 'Hola Local';
//     console.log(variableLocal);
// }

// console.log(variableGlobal);

// saludoLocal();
// //la línea siguiente dará error porque la variable local solamente existe dentro de la función local
// console.log(variableLocal); 


// //Scope o cadena de alcance

// var a = 1;

// function primeraFuncion () {
//     var b = 2;
//     function segundaFuncion () {
//         var c = 3;
//         var a = 20;
//         function terceraFuncion () {
//             console.log('Función #3 ==>');
//             console.log('a = ', a);
//             console.log('b = ', b);
//             console.log('c = ', c);
//         }
//         terceraFuncion();
//     }
//     segundaFuncion();
// }
// primeraFuncion();

//For , if, switch no crean nuevos scopes por lo que se podrá acceder a la variable temp sin ningún problema

for (var i = 0; i < 10; i++) {
    console.log(i);

    if (true){
        var temp = 'hola';
    }
    console.log(temp);
}

console.log("llamada a temp fuera del for" , temp);
