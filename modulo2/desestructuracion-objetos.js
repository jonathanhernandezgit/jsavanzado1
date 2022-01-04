var libro = {
    titulo: "Fundación",
    autor: "Isaac Asimov",
    genero: "Ciencia Ficción",
    numeroPaginas: 255
};

/* Antes de ES6 se accedía a las propiedades de los objetos de esta manera
var titulo = libro.titulo;
var autor = libro.autor;
var genero = libro.genero;
*/

var {titulo, autor, genero} = libro;

console.log(titulo, autor, genero);

//asignar sobrenombres a las propiedades

var {titulo: prop, autor: prop2} = libro;

console.log(prop, prop2);

//operador rest 

var {titulo, autor, ...otros} = libro;

console.log(titulo, autor, otros);

//destructuración dinámica, por medio de claves

var key = "titulo";

var {[key] : val} = libro;

console.log(val);

//Destructuración en objetos anidados

let libros = {
    categorias: {
        drama: ['Sensatez y Sentimientos', 'Ana Karenina', 'Orgullo y Prejuicio'],
        cienciaFiccion: ['Los robot del amanecer', 'Fundación', 'Segunda Fundación']
    }
}

var { 
    categorias:{
        drama: a,
        cienciaFiccion: b}
} = libros;

console.log(a, b);

//Desctructurar arreglos

const arr = [1,2,3,4];
const temp = [...arr, 5];

console.log(temp);

//Destructuración con expresiones regulares

const [all, anno, mes, dia] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2019-10-31');


console.log(all, anno, mes, dia);