

/*const Persona = function(nombre) {
    this.nombre = nombre;
}
*/

//__proto__

//Todas las instancias de Persona apuntarán al mismo prototipo, sin sobrecargar
//la memoria

/*
Persona.prototype.decirNombre = function () {
    console.log('Mi nombre es: ', this.nombre);
}

const persona1 = new Persona('Lincy');
persona1.decirNombre();

const persona2 = new Persona('Lucia');
persona2.decirNombre();*/


//Clases: Implementadas a partir de ES6 2015, Son funcinoes especiales que
//permiten crear objetos y lidiar
//con la herencia de forma más clara y simple. Algunos le llaman 'sugar code'


class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    decirNombre() {
        console.log('Mi nombre es:', this.nombre);
    }
}


const persona1 = new Persona ('Lincy');

const persona2 = new Persona ('Lucía');

persona2.decirNombre();




