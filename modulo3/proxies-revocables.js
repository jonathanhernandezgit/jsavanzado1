const target = {
    titulo: "Fundación",
    autor: "Isaac Asimov",
    genero: "Ciencia Ficción",
    numeroPaginas: 255
};

const handler = {
    get: function(target, prop, proxy) {
        if (prop === 'numeroPaginas'){
            return `Tengo ${target[prop]} páginas`;
        }else {
            return prop;
        }
    },
    set(target, prop, value) {
        if (prop === 'titulo' || prop == 'autor') {
            console.log(`No puedes modificar
            la propiedad ${prop}`);
        }else {
            target[prop] = value;
        }
    }
}

const {proxy:miProxy, revoke} = Proxy.revocable(target, handler);

console.log(miProxy.titulo);
console.log(miProxy.numeroPaginas);

revoke();

miProxy.titulo = 'Un título nuevo';