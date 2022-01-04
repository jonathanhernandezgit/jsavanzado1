//El objeto proxy se utiliza para definir un comportamiento. Se compone de:
//handler (gestiona las intercepciones a las propiedades proxy), traps (métodos)
//interceptores que proveen acceso a las propiedades. Target (Suele usarse)
//como backend de almacenamiento de proxy


const target = function (nombre, apellido) {
    console.log(`Mi nombre es ${nombre} ${apellido}`);
}

const handler = {
    apply: function( target, thisValue, args ) {
        console.log( `Se ha llamado la función ${target.name}
        con los parámetros ${args}`);
        return target( ...args );
    }
}

const miProxy = new Proxy(target, handler);
miProxy('Natalia', 'Corea');